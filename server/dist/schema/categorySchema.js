"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CategoryType = void 0;
const graphql_1 = require("graphql");
exports.CategoryType = new graphql_1.GraphQLObjectType({
    name: "Category",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        imageUrl: { type: graphql_1.GraphQLString },
        iconUrl: { type: graphql_1.GraphQLString },
        category: { type: graphql_1.GraphQLString },
    }),
});
