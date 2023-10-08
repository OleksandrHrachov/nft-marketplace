import express from 'express';
import { ArtistController} from '../controllers/artistController';

const artistController = new ArtistController();

export const artistRouter = express.Router();
artistRouter.get('/', artistController.getArtists);
artistRouter.get('/:id', artistController.getOneArtistById);
