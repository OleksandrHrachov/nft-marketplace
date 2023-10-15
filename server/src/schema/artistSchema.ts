import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";

import { AssetType } from "./assetSchema";
import { getCreatedBy, getGroupAssets } from "../db/asset";

const SocialLinksType = new GraphQLObjectType({
  name: "SocialLinks",
  fields: () => ({
    youtube: { type: GraphQLString },
    twitter: { type: GraphQLString },
    instagram: { type: GraphQLString },
  }),
});

export const ArtistType: GraphQLObjectType = new GraphQLObjectType({
  name: "Artist",
  fields: () => ({
    _id: { type: GraphQLID },
    nickName: { type: GraphQLString },
    avatarUrl: { type: GraphQLString },
    volume: { type: GraphQLInt },
    soldNft: { type: GraphQLInt },
    followers: { type: GraphQLInt },
    bio: { type: GraphQLString },
    socialLinks: { type: SocialLinksType },
    assets: { type: new GraphQLList(GraphQLString) },

    getAssets: {
      type: new GraphQLList(AssetType),
      async resolve(parent, args) {
        if (parent.assets[0] === "" || !parent.assets.length) {
          return [];
        } else {
          return await getGroupAssets(parent.assets);
        }
      },
    },
    totalSales: { type: GraphQLFloat },
  }),
});
