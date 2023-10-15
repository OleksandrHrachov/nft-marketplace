"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGroupAssets = exports.getAssetsByTag = exports.getAssetById = exports.getCreatedBy = exports.getAllAssets = exports.assetModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AssetSchema = new mongoose_1.default.Schema({
    assetName: { type: String, required: true },
    imgUrl: { type: String },
    createdAt: { type: String, required: true },
    description: { type: String },
    price: { type: Number, required: true },
    highestBid: { type: Number, default: 0 },
    tags: { type: Array, default: [] },
    creatorId: { type: String, required: true },
});
exports.assetModel = mongoose_1.default.model("Asset", AssetSchema);
const getAllAssets = () => exports.assetModel.find();
exports.getAllAssets = getAllAssets;
const getCreatedBy = (createdByAttistId) => exports.assetModel.find({ createdBy: createdByAttistId });
exports.getCreatedBy = getCreatedBy;
const getAssetById = (id) => exports.assetModel.findById(id);
exports.getAssetById = getAssetById;
const getAssetsByTag = (tags) => {
    return exports.assetModel.find({ tags: { $in: [...tags] } });
};
exports.getAssetsByTag = getAssetsByTag;
const getGroupAssets = (ids) => {
    return exports.assetModel.find({ _id: { $in: [...ids] } });
};
exports.getGroupAssets = getGroupAssets;
