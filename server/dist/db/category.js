"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCategories = exports.artistModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const CategorySchema = new mongoose_1.default.Schema({
    imageUrl: { type: String, required: true },
    iconUrl: { type: String, required: true },
    category: { type: String, required: true },
});
exports.artistModel = mongoose_1.default.model("Category", CategorySchema);
const getAllCategories = () => exports.artistModel.find();
exports.getAllCategories = getAllCategories;
