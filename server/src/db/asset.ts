import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema({
  assetName: { type: String, required: true },
  imgUrl: { type: String },
  createdBy: { type: String, required: true },
  price: { type: Number, required: true },
  highestBid: { type: Number, default: 0 },
});

export const assetModel = mongoose.model("Asset", AssetSchema);

export const getAllAssets = () => assetModel.find();
export const getAssetById = (id: string) => assetModel.findById(id);
