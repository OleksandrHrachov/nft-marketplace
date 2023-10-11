import { GraphQLObjectType, GraphQLID, GraphQLString } from "graphql";

export const BannerType = new GraphQLObjectType({
  name: "Banner",
  fields: () => ({
    imgUrl: { type: GraphQLString },
  }),
});
