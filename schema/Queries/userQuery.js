const graphql=require("graphql")
const {GraphQLList,GraphQLString}=graphql
const userType=require("../Typedefs/userType")
//This way find data
// query{
//     userList{
//       id,
//     }
//   }
module.exports.USER_LIST={
    type:new GraphQLList(userType),
    resolve :async(parent,args,context)=>{
        let mydata= await context()
        let data1= await parent.Models.user.findAll()
        return data1
    }
}

//1 If Send single argument then do this
// query{
//     OneUser(id:"32a37494-5cfa-4289-8a3d-dd5b23c5d74c"){
//       id,
//       email
//     }
//   }
  //2. In case if multiple arguments
//   query singleUser($userId:String!){
//     OneUser(id:$userId){
//       id,
//       email
//     }
//   }
// in query variables
// {
//     "userId":"32a37494-5cfa-4289-8a3d-dd5b23c5d74c"
//   }
module.exports.One_USER={
    type:new GraphQLList(userType),
    args:{id:{type:GraphQLString}},
    resolve :async(parent,args,context)=>{
        console.log("arguments",args)
        let mydata= await context()
        let data1= await parent.Models.user.findAll({where:{id:args.id}})
        return data1
    }
}
