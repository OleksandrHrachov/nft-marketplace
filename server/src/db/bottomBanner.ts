import mongoose from "mongoose";

const BottomBannerSchema = new mongoose.Schema({
  imgUrl: { type: String },
  assetName: {type: String},
  creatorId: { type: String, required: true },
  assetId: { type: String, required: true }
});

export const bottomBannerModel = mongoose.model("BottomBanner", BottomBannerSchema);

export const getBottomBanner = () => bottomBannerModel.find();
