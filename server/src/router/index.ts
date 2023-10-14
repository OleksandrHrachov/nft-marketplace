import express from 'express';
import { assetsRouter } from './assetsRouter';
import { bannerRouter } from './bannerRouter';
import { artistRouter } from './artistRouter';

export const routers = express.Router();
routers.use('/assets', assetsRouter);
routers.use('/banner', bannerRouter);
routers.use('/artist', artistRouter);
