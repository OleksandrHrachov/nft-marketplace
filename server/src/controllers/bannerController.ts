import express from "express";
import { getBannerAsset} from "../db/bannerAsset";

export class BannerController {
  async getBanner(req: express.Request, res: express.Response) {
    try {
      const banner = await getBannerAsset();
      console.log("Banner =>", banner);
      if (!banner.length) {
        return res.status(200).json({ message: "No banner." });
      }

      return res.status(200).json(banner);
    } catch (error) {
      console.log("getBanner - controller =>", error);
      return res.status(500).json({message: 'Some error on the server.'});
    }
  }
}
