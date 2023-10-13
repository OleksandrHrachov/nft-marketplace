"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getArtistById = exports.getAllArtists = exports.artistModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ArtistSchema = new mongoose_1.default.Schema({
    nickName: { type: String, required: true },
    avatarUrl: { type: String },
    volume: { type: Number },
    soldNft: { type: Number, required: true },
    followers: { type: Number, required: true },
    bio: { type: String },
    socialLinks: {
        youtube: { type: String },
        twitter: { type: String },
        instagram: { type: String },
    },
    assets: { type: Array, default: [] },
    totalSales: { type: Number, required: true }
});
exports.artistModel = mongoose_1.default.model("Artist", ArtistSchema);
const getAllArtists = () => exports.artistModel.find();
exports.getAllArtists = getAllArtists;
const getArtistById = (id) => exports.artistModel.findById(id);
exports.getArtistById = getArtistById;
