"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AssetType = void 0;
const graphql_1 = require("graphql");
const artistSchema_1 = require("./artistSchema");
const artist_1 = require("../db/artist");
exports.AssetType = new graphql_1.GraphQLObjectType({
    name: "Asset",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        assetName: { type: graphql_1.GraphQLString },
        imgUrl: { type: graphql_1.GraphQLString },
        createdBy: {
            type: artistSchema_1.ArtistType,
            async resolve(parent, args) {
                return await (0, artist_1.getArtistById)(parent.creatorId);
            }
        },
        createdAt: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
        price: { type: graphql_1.GraphQLFloat },
        highestBid: { type: graphql_1.GraphQLFloat },
        tags: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) },
        creatorId: { type: graphql_1.GraphQLString }
    }),
});
