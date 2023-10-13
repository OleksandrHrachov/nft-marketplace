"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArtistType = void 0;
const graphql_1 = require("graphql");
const assetSchema_1 = require("./assetSchema");
const asset_1 = require("../db/asset");
const SocialLinksType = new graphql_1.GraphQLObjectType({
    name: "SocialLinks",
    fields: () => ({
        youtube: { type: graphql_1.GraphQLString },
        twitter: { type: graphql_1.GraphQLString },
        instagram: { type: graphql_1.GraphQLString },
    }),
});
exports.ArtistType = new graphql_1.GraphQLObjectType({
    name: "Artist",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        nickName: { type: graphql_1.GraphQLString },
        avatarUrl: { type: graphql_1.GraphQLString },
        volume: { type: graphql_1.GraphQLInt },
        soldNft: { type: graphql_1.GraphQLInt },
        followers: { type: graphql_1.GraphQLInt },
        bio: { type: graphql_1.GraphQLString },
        socialLinks: { type: SocialLinksType },
        assets: {
            type: new graphql_1.GraphQLList(assetSchema_1.AssetType),
            resolve(parent, args) {
                return (0, asset_1.getCreatedBy)(parent._id);
            },
        },
        totalSales: { type: graphql_1.GraphQLFloat },
    }),
});
