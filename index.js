import express from "express";
import serveHotApi from "guole.fun.api";
import { ipAddress, geolocation } from '@vercel/edge';
import logger from "guole.fun.api/dist/utils/logger.js"; // 确保正确导入 logger

const app = express();

// /ip 接口逻辑
app.get('/ip', (req, res) => {
  const ip = ipAddress(req);
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  logger.info(`IP: ${ip}, Path: ${pathname}`);
  
  const geo = geolocation(req);
  logger.info(`Geolocation: ${JSON.stringify(geo)}`);
  
  res.json({
    ip,
    ...geo
  }, {
    headers: {
      'x-client-ip': ip
    }
  });
});

// 使用 guole.fun.api
app.use(serveHotApi());

export default app;