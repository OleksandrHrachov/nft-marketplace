import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLFloat
} from "graphql";
import { ArtistType } from './artistSchema';
import { getArtistById } from "../db/artist";

interface IMyAssetType {
  name: string;
  fields: () => ({
    _id: string;
    assetName: string;
    imgUrl: string;
    createdBy: {
      type: unknown,
      args: { [key: string]: string },
      resolve(parent: unknown, args: unknown): unknown;
     },
    createdAt: string;
    description: string;
    price: number
    highestBid: number
    tags: string[];
    detailsLink:string;
  }),
}

export const AssetType: GraphQLObjectType = new GraphQLObjectType({
  name: "Asset",
  fields: () => ({
    _id: { type: GraphQLID },
    assetName: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    createdBy: {
      type: ArtistType,
      async resolve(parent, args) {
        return await getArtistById(parent.creatorId)
        
      }
     },
    createdAt: { type: GraphQLString },
    description: { type: GraphQLString },
    price:{type: GraphQLFloat},
    highestBid: {type: GraphQLFloat},
    tags: {type: new GraphQLList(GraphQLString)},
    creatorId: { type: GraphQLString }
  }),
});
