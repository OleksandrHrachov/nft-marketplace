"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BannerType = void 0;
const graphql_1 = require("graphql");
exports.BannerType = new graphql_1.GraphQLObjectType({
    name: "Banner",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        assetName: { type: graphql_1.GraphQLString },
        imgUrl: { type: graphql_1.GraphQLString },
        createdBy: { type: graphql_1.GraphQLString },
        creatorNickName: { type: graphql_1.GraphQLString },
        creatorAvatarUrl: { type: graphql_1.GraphQLString },
        assetId: { type: graphql_1.GraphQLString },
    }),
});
