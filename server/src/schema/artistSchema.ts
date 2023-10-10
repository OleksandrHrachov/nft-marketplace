import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  GraphQLFloat,
} from "graphql";

import { AssetType } from "./assetSchema";
import { getCreatedBy } from "../db/asset";

const SocialLinksType = new GraphQLObjectType({
  name: "SocialLinks",
  fields: () => ({
    youtube: { type: GraphQLString },
    twitter: { type: GraphQLString },
    instagram: { type: GraphQLString },
  }),
});

export const ArtistType = new GraphQLObjectType({
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
    assets: {
      type: new GraphQLList(AssetType),
      args: { createdBy: { type: GraphQLString } },
      resolve(parent, args) {
        return getCreatedBy(args.createdBy);
      },
    },
    totalSales: { type: GraphQLFloat },
  }),
});
