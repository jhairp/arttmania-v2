import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// @ts-ignore - plain JS serverless helper shared with Vite dev server
import { checkTikTokLiveStatus } from './api/tiktok-live.js';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'tiktok-live-status-middleware',
      configureServer(server) {
        server.middlewares.use('/api/tiktok-live', async (req, res) => {
          try {
            const url = new URL(req.url || '/', 'http://localhost');
            const user = url.searchParams.get('user') || 'artt.mania';
            const data = await checkTikTokLiveStatus(user);
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(JSON.stringify(data));
          } catch {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json; charset=utf-8');
            res.end(
              JSON.stringify({
                username: 'artt.mania',
                isLive: false,
                roomId: null,
                checkedAt: Date.now()
              })
            );
          }
        });
      }
    }
  ],
  server: {
    port: 3000,
    open: false,
    host: true
  }
});
