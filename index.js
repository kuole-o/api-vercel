import { Hono } from 'hono';
import hotApi from 'guole.fun.api';
import { ipAddress, geolocation } from '@vercel/edge';
import logger from 'guole.fun.api/dist/utils/logger.js';

const app = new Hono();

// /ip 接口逻辑
app.get('/ip', (c) => {
  const ip = ipAddress(c.req);
  const { pathname } = new URL(c.req.url);
  logger.info(`IP: ${ip}, Path: ${pathname}`);
  
  const geo = geolocation(c.req);
  logger.info(`Geolocation: ${JSON.stringify(geo)}`);
  
  return c.json({
    ip,
    ...geo
  }, {
    headers: {
      'x-client-ip': ip
    }
  });
});

// 挂载 guole.fun.api 的 Hono 应用到 /api 路由下
app.mount('/*', hotApi);

export default app;