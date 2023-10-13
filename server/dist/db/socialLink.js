"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllSocialLinks = exports.socialLinkModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SocialLinkSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    url: { type: String },
});
exports.socialLinkModel = mongoose_1.default.model("SocialLink", SocialLinkSchema);
const getAllSocialLinks = () => exports.socialLinkModel.find();
exports.getAllSocialLinks = getAllSocialLinks;
