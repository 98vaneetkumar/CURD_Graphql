const graphql=require("graphql")
const {GraphQLObjectType,GraphQLSchema,GraphQLList,GraphQLInt,GraphQLString}=graphql

const userDetailType = new GraphQLObjectType({
    name: "userDetail",
    fields: () => ({
      id: { type: GraphQLInt },
    }),
  });


//This is type definition
const userType = new GraphQLObjectType({
    name: "user", // Add the 'name' property
    fields: () => ({
      id: { type: GraphQLInt },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
      insideData: { type: userDetailType }, // Use the previously defined type here
    }),
  });

  //Intract with the  database
const RootQuery= new GraphQLObjectType({
    name:"query",
    fields:{
        codeImprove:{
            type:new GraphQLList(userType),
            resolve(parent,arguments){
                let data=[{
                    id:1,name:"Vaneet kumar",email:"vaneet@gmail.com",phone:1234567,insideData:{id:210}
                },{
                    id:2,name:"Vaneet",email:"vaneet12@gmail.com",phone:123456647,insideData:{id:33}
                }]
                return data
            }
        }
    }
})

module.exports= new GraphQLSchema({query:RootQuery})