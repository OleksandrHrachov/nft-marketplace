import mongoose from "mongoose";

const BannerSchema = new mongoose.Schema({
  assetName: { type: String, required: true },
  imgUrl: {
    desktop: { type: String },
    tablet: { type: String },
    mobile: { type: String },
  },
  createdBy: { type: String, required: true },
  price: { type: Number, required: true },
  highestBid: { type: Number, default: 0 },
});

export const bannerModel = mongoose.model("Banner", BannerSchema);

export const getBannerAsset = () => bannerModel.find();
