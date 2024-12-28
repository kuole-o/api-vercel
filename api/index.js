import serveHotApi from 'guole.fun.api';
import { ipAddress, geolocation } from '@vercel/edge';
import logger from 'guole.fun.api/dist/utils/logger.js';

serveHotApi();