import mongoose from "mongoose";

const AssetSchema = new mongoose.Schema({
  assetName: { type: String, required: true },
  imgUrl: {
    desktop: { type: String },
    tablet: { type: String },
    mobile: { type: String },
  },
  createdBy: { type: String, required: true },
});

export const assetModel = mongoose.model("Asset", AssetSchema);

export const getAllAssets = () => assetModel.find();
export const getAssetById = (id: string) => assetModel.findById(id);
