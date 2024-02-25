const graphql=require("graphql")
const {GraphQLObjectType,GraphQLSchema}=graphql
const {USER_LIST,One_USER}=require("./Queries/userQuery")
const {USER_ADD,Update_User,DELETE_USER}=require('./Mutation/user');
const RootQuery= new GraphQLObjectType({
    name:"query",
    fields:{
        userList:USER_LIST,
        OneUser:One_USER
    }
})

const Mutation= new GraphQLObjectType({
    name:"mutation",
    fields:{
        createUser:USER_ADD,
        updateUser:Update_User,
        deleteUser:DELETE_USER
    }
})

module.exports= new GraphQLSchema({query:RootQuery,mutation:Mutation}) 