"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSubscribe = exports.subscribeModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const SubscribeSchema = new mongoose_1.default.Schema({
    imgUrl: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
});
exports.subscribeModel = mongoose_1.default.model("Subscribe", SubscribeSchema);
const getSubscribe = () => exports.subscribeModel.find();
exports.getSubscribe = getSubscribe;
