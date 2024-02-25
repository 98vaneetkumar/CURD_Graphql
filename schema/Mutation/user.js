const graphql=require("graphql")
const {GraphQLList,GraphQLString,GraphQLInt}=graphql
const userType=require("../Typedefs/userType")
const StatusSchema= require("../Typedefs/StatusSchema")

module.exports.USER_ADD={
    type:userType,
    args:{
        Name:{type:GraphQLString},
        email:{type:GraphQLString},
        phoneNumber:{type:GraphQLString},
    },
    resolve :async(parent,args)=>{
      await parent.Models.user.create({
        Name:args.Name,
        email:args.email,
        phoneNumber:args.phoneNumber
      })  
      return args
    }
}

module.exports.Update_User={
  type:StatusSchema,
  args:{},
  resolve:async(parent,args)=>{
    await parent.Models.user.update({
      Name:args.Name,
      email:args.email,
      phoneNumber:args.phoneNumber
    },{
      where:{
        id:args.id,
      }
    })
    return {success:true,message:"Updated user",error:""}
  }
}

module.exports.DELETE_USER={
  type:StatusSchema,
  args:{},
  resolve:async(parent,args)=>{
    await parent.Models.user.destroy({
      where:{
        id:args.id,
      }
    })
    return {success:true,message:"Deleted user",error:""}
  }
}