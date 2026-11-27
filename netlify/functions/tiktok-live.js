import { checkTikTokLiveStatus } from '../../api/tiktok-live.js';

export const handler = async (event) => {
  const username = event?.queryStringParameters?.user || 'artt.mania';
  const result = await checkTikTokLiveStatus(username);

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=60'
    },
    body: JSON.stringify(result)
  };
};
