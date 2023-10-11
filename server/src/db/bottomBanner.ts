import mongoose from "mongoose";

const BottomBannerSchema = new mongoose.Schema({
  imgUrl: { type: String },
});

export const artistModel = mongoose.model("BottomBanner", BottomBannerSchema);

export const getBottomBanner = () => artistModel.find();
