"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocialLinkType = void 0;
const graphql_1 = require("graphql");
exports.SocialLinkType = new graphql_1.GraphQLObjectType({
    name: "SocialLink",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        name: { type: graphql_1.GraphQLString },
        url: { type: graphql_1.GraphQLString },
    }),
});
