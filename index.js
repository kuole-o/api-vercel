import express from "express";
import serveHotApi from "guole.fun.api";
import { ipAddress, geolocation, json } from '@vercel/edge';

const app = express();

// /ip 接口逻辑
app.get('/ip', (req, res) => {
  const ip = ipAddress(req);
  const { pathname } = new URL(req.url, `http://${req.headers.host}`);
  console.log(ip, pathname);
  const geo = geolocation(req);
  console.log(geo);
  res.json({
    ip,
    ...geo
  }, {
    headers: {
      'x-client-ip': ip
    }
  });
});

// 其他 API 路由
app.use(serveHotApi);

export default app;
