"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rootSchema = exports.RootQuery = void 0;
const graphql_1 = require("graphql");
const bannerSchema_1 = require("./bannerSchema");
const bannerAsset_1 = require("../db/bannerAsset");
const artistSchema_1 = require("./artistSchema");
const artist_1 = require("../db/artist");
const assetSchema_1 = require("./assetSchema");
const asset_1 = require("../db/asset");
const categorySchema_1 = require("./categorySchema");
const category_1 = require("../db/category");
const bottomBanner_1 = require("../db/bottomBanner");
const howItWorkSchema_1 = require("./howItWorkSchema");
const howItWork_1 = require("../db/howItWork");
const sudscribeSchema_1 = require("./sudscribeSchema");
const subscribe_1 = require("../db/subscribe");
const socialLinkSchema_1 = require("./socialLinkSchema");
const socialLink_1 = require("../db/socialLink");
const bottomBannerSchema_1 = require("./bottomBannerSchema");
exports.RootQuery = new graphql_1.GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        banner: {
            type: bannerSchema_1.BannerType,
            async resolve(parent, args) {
                const result = await (0, bannerAsset_1.getBannerAsset)();
                return result[0];
            },
        },
        artist: {
            type: artistSchema_1.ArtistType,
            args: { _id: { type: graphql_1.GraphQLID } },
            async resolve(parent, args) {
                const result = await (0, artist_1.getArtistById)(args._id);
                return result;
            },
        },
        artists: {
            type: new graphql_1.GraphQLList(artistSchema_1.ArtistType),
            async resolve(parent, args) {
                const result = await (0, artist_1.getAllArtists)();
                return result;
            },
        },
        asset: {
            type: assetSchema_1.AssetType,
            args: { _id: { type: graphql_1.GraphQLID } },
            async resolve(parent, args) {
                const result = await (0, asset_1.getAssetById)(args._id);
                return result;
            },
        },
        assets: {
            type: new graphql_1.GraphQLList(assetSchema_1.AssetType),
            async resolve(parent, args) {
                const result = await (0, asset_1.getAllAssets)();
                return result;
            },
        },
        assetsCollection: {
            type: new graphql_1.GraphQLList(assetSchema_1.AssetType),
            args: { tags: { type: new graphql_1.GraphQLList(graphql_1.GraphQLString) } },
            async resolve(parent, args) {
                const result = await (0, asset_1.getAssetsByTag)(args.tags);
                return result;
            },
        },
        categories: {
            type: new graphql_1.GraphQLList(categorySchema_1.CategoryType),
            async resolve(parent, args) {
                const result = await (0, category_1.getAllCategories)();
                return result;
            },
        },
        bottomBanner: {
            type: new graphql_1.GraphQLList(bottomBannerSchema_1.BottomBannerType),
            async resolve(parent, args) {
                const result = await (0, bottomBanner_1.getBottomBanner)();
                return result;
            },
        },
        howItWorkCards: {
            type: new graphql_1.GraphQLList(howItWorkSchema_1.HowItWorkCardType),
            async resolve(parent, args) {
                const result = await (0, howItWork_1.getAllCards)();
                return result;
            },
        },
        subscribe: {
            type: new graphql_1.GraphQLList(sudscribeSchema_1.SubscribeType),
            async resolve(parent, args) {
                const result = await (0, subscribe_1.getSubscribe)();
                return result;
            },
        },
        socialLinks: {
            type: new graphql_1.GraphQLList(socialLinkSchema_1.SocialLinkType),
            async resolve(parent, args) {
                const result = await (0, socialLink_1.getAllSocialLinks)();
                return result;
            }
        }
    },
});
exports.rootSchema = new graphql_1.GraphQLSchema({
    query: exports.RootQuery,
});
