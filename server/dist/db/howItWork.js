"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllCards = exports.howItWorkCardModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const HowItWorkCardSchema = new mongoose_1.default.Schema({
    title: { type: String, required: true },
    imgUrl: { type: String, required: true },
    description: { type: String, required: true },
});
exports.howItWorkCardModel = mongoose_1.default.model("HowItWorkCard", HowItWorkCardSchema);
const getAllCards = () => exports.howItWorkCardModel.find();
exports.getAllCards = getAllCards;
