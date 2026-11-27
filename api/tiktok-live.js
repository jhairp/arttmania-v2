// Serverless endpoint for Vercel (/api/tiktok-live)
// Detects whether a TikTok account (@artt.mania by default) is currently broadcasting LIVE.

const DEFAULT_USERNAME = 'artt.mania';
const CACHE_TTL_MS = 60_000;

let cachedStatus = {
  username: DEFAULT_USERNAME,
  isLive: false,
  roomId: null,
  checkedAt: 0
};

export function parseTikTokLiveHtml(html) {
  if (!html || typeof html !== 'string') {
    return { isLive: false, roomId: null };
  }

  // 1. Check SIGI_STATE / __UNIVERSAL_DATA_FOR_REHYDRATION__ JSON blocks
  const roomStatusMatch =
    html.match(/"liveRoomUserInfo"\s*:\s*\{[\s\S]{0,1200}?"status"\s*:\s*(\d+)/) ||
    html.match(/"liveRoom"\s*:\s*\{[\s\S]{0,1200}?"status"\s*:\s*(\d+)/) ||
    html.match(/"roomInfo"\s*:\s*\{[\s\S]{0,1200}?"status"\s*:\s*(\d+)/);

  const roomIdMatch =
    html.match(/"roomId"\s*:\s*"(\d{10,25})"/) ||
    html.match(/"room_id"\s*:\s*"(\d{10,25})"/);

  const roomId = roomIdMatch && roomIdMatch[1] !== '0' ? roomIdMatch[1] : null;

  if (roomStatusMatch) {
    // In TikTok Web Live data: status === 2 means LIVE is active, status === 4 means LIVE ended
    const statusNum = Number(roomStatusMatch[1]);
    return {
      isLive: statusNum === 2 && Boolean(roomId),
      roomId
    };
  }

  // 2. Fallback: check user.roomId on profile payload (non-empty & non-zero only when live)
  const userRoomMatch = html.match(/"user"\s*:\s*\{[^{}]{0,1500}?"roomId"\s*:\s*"(\d{10,25})"/);
  if (userRoomMatch && userRoomMatch[1] !== '0') {
    const isEnded = /"status"\s*:\s*4\b/.test(html);
    if (!isEnded) {
      return {
        isLive: true,
        roomId: userRoomMatch[1]
      };
    }
  }

  return { isLive: false, roomId: null };
}

export async function checkTikTokLiveStatus(username = DEFAULT_USERNAME) {
  const cleanUser = String(username || DEFAULT_USERNAME).replace(/^@/, '').trim();
  const now = Date.now();

  if (
    cachedStatus.username === cleanUser &&
    now - cachedStatus.checkedAt < CACHE_TTL_MS
  ) {
    return {
      ...cachedStatus,
      liveUrl: `https://www.tiktok.com/@${cleanUser}/live`,
      profileUrl: `https://www.tiktok.com/@${cleanUser}`
    };
  }

  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
    Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Accept-Language': 'es-ES,es;q=0.9,en;q=0.8',
    'Cache-Control': 'no-cache'
  };

  try {
    const response = await fetch(`https://www.tiktok.com/@${encodeURIComponent(cleanUser)}/live`, {
      headers,
      redirect: 'follow'
    });

    const html = await response.text();
    const { isLive, roomId } = parseTikTokLiveHtml(html);

    cachedStatus = {
      username: cleanUser,
      isLive,
      roomId,
      checkedAt: now
    };
  } catch {
    cachedStatus = {
      username: cleanUser,
      isLive: false,
      roomId: null,
      checkedAt: now
    };
  }

  return {
    ...cachedStatus,
    liveUrl: `https://www.tiktok.com/@${cleanUser}/live`,
    profileUrl: `https://www.tiktok.com/@${cleanUser}`
  };
}

export default async function handler(req, res) {
  const username =
    (req?.query && req.query.user) ||
    DEFAULT_USERNAME;

  const result = await checkTikTokLiveStatus(username);

  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=30');
  res.status(200).json(result);
}
