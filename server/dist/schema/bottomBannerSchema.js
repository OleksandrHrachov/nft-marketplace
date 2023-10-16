"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BottomBannerType = void 0;
const graphql_1 = require("graphql");
const artistSchema_1 = require("./artistSchema");
const artist_1 = require("../db/artist");
exports.BottomBannerType = new graphql_1.GraphQLObjectType({
    name: "BottomBannerType",
    fields: () => ({
        imgUrl: { type: graphql_1.GraphQLString },
        _id: { type: graphql_1.GraphQLID },
        createdBy: {
            type: artistSchema_1.ArtistType,
            async resolve(parent, args) {
                return await (0, artist_1.getArtistById)(parent.creatorId);
            }
        },
        creatorId: { type: graphql_1.GraphQLString },
        assetName: { type: graphql_1.GraphQLString },
        assetId: { type: graphql_1.GraphQLString }
    }),
});
