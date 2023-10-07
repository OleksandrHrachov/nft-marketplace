import express from 'express';
import { assetsRouter } from './assetsRouter';
import { bannerRouter } from './bannerRouter';

export const routers = express.Router();
routers.use('/assets', assetsRouter);
routers.use('/banner', bannerRouter);
