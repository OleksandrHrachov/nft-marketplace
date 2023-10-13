"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HowItWorkCardType = void 0;
const graphql_1 = require("graphql");
exports.HowItWorkCardType = new graphql_1.GraphQLObjectType({
    name: "HowItWorkCard",
    fields: () => ({
        _id: { type: graphql_1.GraphQLID },
        title: { type: graphql_1.GraphQLString },
        imgUrl: { type: graphql_1.GraphQLString },
        description: { type: graphql_1.GraphQLString },
    }),
});
