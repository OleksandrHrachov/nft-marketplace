import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLSchema,
  GraphQLList,
  GraphQLString
} from "graphql";
import { BannerType } from "./bannerSchema";
import { getBannerAsset } from "../db/bannerAsset";
import { ArtistType } from "./artistSchema";
import { getAllArtists, getArtistById } from "../db/artist";
import { AssetType } from "./assetSchema";
import { getAllAssets, getAssetById, getAssetsByTag } from "../db/asset";
import { CategoryType } from "./categorySchema"
import { getAllCategories} from "../db/category"
import { getBottomBanner } from "../db/bottomBanner";

export const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    banner: {
      type: BannerType,
      async resolve(parent, args) {
        const result = await getBannerAsset();
        return result[0];
      },
    },
    artist: {
      type: ArtistType,
      args: { _id: { type: GraphQLID } },
      async resolve(parent, args) {
        const result = await getArtistById(args._id);
        return result;
      },
    },
    artists: {
      type: new GraphQLList(ArtistType),
      async resolve(parent, args) {
        const result = await getAllArtists();
        return result;
      },
    },
    asset: {
      type: AssetType,
      args: { _id: { type: GraphQLID } },
      async resolve(parent, args) {
        const result = await getAssetById(args._id);
        return result;
      },
    },
    assets: {
      type: new GraphQLList(AssetType),
      async resolve(parent, args) {
        const result = await getAllAssets();
        return result;
      },
    },
    assetsCollection: {
      type: new GraphQLList(AssetType),
      args: { tags: { type: new GraphQLList(GraphQLString) } },
      async resolve(parent, args) {
        const result = await getAssetsByTag(args.tags);
        return result;
      },
    },
    categories: {
      type: new GraphQLList(CategoryType),
      async resolve(parent, args) {
        const result = await getAllCategories();
        return result;
      },
    },
    bottomBanner: {
      type: new GraphQLList(AssetType),
      async resolve(parent, args) {
        const result = await getBottomBanner();
        return result;
      },
    },
  },
});

export const rootSchema = new GraphQLSchema({
  query: RootQuery,
});
