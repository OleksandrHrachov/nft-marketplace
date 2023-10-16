"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBottomBanner = exports.bottomBannerModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const BottomBannerSchema = new mongoose_1.default.Schema({
    imgUrl: { type: String },
    assetName: { type: String },
    creatorId: { type: String, required: true },
    assetId: { type: String, required: true }
});
exports.bottomBannerModel = mongoose_1.default.model("BottomBanner", BottomBannerSchema);
const getBottomBanner = () => exports.bottomBannerModel.find();
exports.getBottomBanner = getBottomBanner;
