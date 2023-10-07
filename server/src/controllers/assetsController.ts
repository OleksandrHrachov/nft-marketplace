import express from "express";
import { getAllAssets, getAssetById } from "../db/asset";

export class AssetsController {
  async getAssets(req: express.Request, res: express.Response) {
    try {
      const assets = await getAllAssets();
      console.log("ASSETS =>", assets);
      if (!assets.length) {
        return res.status(200).json({ message: "No assets." });
      }

      return res.status(200).json(assets);
    } catch (error) {
      console.log("getAssets - controller =>", error);
      return res.status(500).json({message: 'Some error on the server.'});
    }
  }

  async getOneAssetById(req: express.Request, res: express.Response) {
    try {
      const { id } = req.body;

      if (!id) {
        return res.status(400).json({message: 'ID is required!!!'});
      }

      const asset = await getAssetById(id);

      if (!asset) {
        return res.status(200).json({ message: "No asset." });
      }

      return res.status(200).json(asset);
    } catch (error) {
      console.log("getOneAssetById - controller =>", error);
      return res.status(500).json({message: 'Some error on the server.'});
    }
  }
}
