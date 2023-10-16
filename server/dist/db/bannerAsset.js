"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBannerAsset = exports.bannerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BannerSchema = new mongoose_1.default.Schema({
    assetName: { type: String, required: true },
    imgUrl: { type: String },
    createdBy: { type: String, required: true },
    creatorNickName: { type: String },
    creatorAvatarUrl: { type: String },
    assetId: { type: String }
});
exports.bannerModel = mongoose_1.default.model("Banner", BannerSchema);
const getBannerAsset = () => exports.bannerModel.find();
exports.getBannerAsset = getBannerAsset;
