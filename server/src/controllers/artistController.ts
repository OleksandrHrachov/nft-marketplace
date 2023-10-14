import express from "express";
import { getAllArtists, getArtistById } from "../db/artist";

export class ArtistController {
  async getArtists(req: express.Request, res: express.Response) {
    try {
      const artists = await getAllArtists();
      
      if (!artists.length) {
        return res.status(200).json({ message: "No artists." });
      }

      return res.status(200).json(artists);
    } catch (error) {
      console.log("getArtists - controller =>", error);
      return res.status(500).json({ message: "Some error on the server." });
    }
  }

  async getOneArtistById(req: express.Request, res: express.Response) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({ message: "ID is required!!!" });
      }

      const artist = await getArtistById(id);

      if (!artist) {
        return res.status(200).json({ message: "No artist." });
      }

      return res.status(200).json(artist);
    } catch (error) {
      console.log("getOneArtistById - controller =>", error);
      return res.status(500).json({ message: "Some error on the server." });
    }
  }
}
