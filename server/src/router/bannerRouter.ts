import express from 'express';
import { BannerController } from '../controllers/bannerController';

const bannerController = new BannerController();

export const bannerRouter = express.Router();
bannerRouter.get('/', bannerController.getBanner);
