import {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLFloat
} from "graphql";
// import { ArtistType } from './artistSchema';
// import { getArtistById } from "../db/artist";

interface IMyAssetType {
  name: string;
  fields: () => ({
    _id: string;
    assetName: string;
    imgUrl: string;
    // createdBy: { type: GraphQLString },
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

export const AssetType = new GraphQLObjectType({
  name: "Asset",
  fields: () => ({
    _id: { type: GraphQLID },
    assetName: { type: GraphQLString },
    imgUrl: { type: GraphQLString },
    createdBy: { type: GraphQLString },
    // createdBy: {
    //   type: ArtistType,
    //   args: { _id: { type: GraphQLString } },
    //   resolve(parent, args) {
    //     return getArtistById(args._id)
        
    //   }
    //  },
    createdAt: { type: GraphQLString },
    description: { type: GraphQLString },
    price:{type: GraphQLFloat},
    highestBid: {type: GraphQLFloat},
    tags: {type: new GraphQLList(GraphQLString)},
    detailsLink: { type: GraphQLString }
  }),
});
