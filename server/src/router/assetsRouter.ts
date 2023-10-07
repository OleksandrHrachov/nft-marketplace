import express from 'express';
import { AssetsController } from '../controllers/assetsController';

const assetsController = new AssetsController();

export const assetsRouter = express.Router();
assetsRouter.get('/', assetsController.getAssets);
assetsRouter.get('/:id', assetsController.getOneAssetById);
