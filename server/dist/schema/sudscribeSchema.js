"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeType = void 0;
const graphql_1 = require("graphql");
exports.SubscribeType = new graphql_1.GraphQLObjectType({
    name: "Subscribe",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        imgUrl: { type: graphql_1.GraphQLString },
        title: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
    }),
});
