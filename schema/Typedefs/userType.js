const graphql=require("graphql")
const {GraphQLObjectType,GraphQLInt,GraphQLString}=graphql
//This is type definition
const userType = new GraphQLObjectType({
    name: "user", // Add the 'name' property
    fields: () => ({
      id: { type: GraphQLString },
      Name: { type: GraphQLString },
      email: { type: GraphQLString },
      phoneNumber: { type: GraphQLString },
      Image:{type: GraphQLString},
      Bio:{type: GraphQLString},
      dateOfBirth:{type: GraphQLString},
      location:{type: GraphQLString},
      zipCode:{type:GraphQLInt},
      document:{type: GraphQLString},
      termCondition:{type: GraphQLString},
      termCondition:{type:GraphQLInt},
      status:{type: GraphQLString}, 
    }),
  });

 module.exports=userType 