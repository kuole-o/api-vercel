import serveHotApi from 'guole.fun.api';
import { ipAddress, geolocation } from '@vercel/edge';
import logger from 'guole.fun.api/dist/utils/logger.js';

serveHotApi();

// export async function middleware(request) {
//   if (new URL(request.url).pathname === '/ip') {
//     const ip = ipAddress(request);
//     const { pathname } = new URL(request.url);
//     logger.info(`IP: ${ip}, Path: ${pathname}`);
    
//     const geo = geolocation(request);
//     logger.info(`Geolocation: ${JSON.stringify(geo)}`);
    
//     return json({
//       ip,
//       ...geo
//     }, {
//       headers: {
//         'x-client-ip': ip
//       }
//     });
//   }
//   // 如果不是 /ip 路径，则继续执行原有的 API 服务
//   return serveHotApi()(request);
// }