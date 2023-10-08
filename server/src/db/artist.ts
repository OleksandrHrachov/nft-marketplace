import mongoose from "mongoose";

const ArtistSchema = new mongoose.Schema({
  nickName: { type: String, required: true },
  avatarUrl: { type: String },
});

export const artistModel = mongoose.model("Artist", ArtistSchema);

export const getAllArtists = () => artistModel.find();
export const getArtistById = (id: string) => artistModel.findById(id);