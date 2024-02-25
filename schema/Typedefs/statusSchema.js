const graphql=require("graphql")
const {GraphQLObjectType,GraphQLInt,GraphQLString,GraphQLBoolean}=graphql
//This is type definition
const StatusSchema = new GraphQLObjectType({
    name: "status", // Add the 'name' property
    fields: () => ({
      success: { type: GraphQLBoolean },
      message: { type: GraphQLString },
      error: { type: GraphQLString },
    }),
  });

 module.exports=StatusSchema 