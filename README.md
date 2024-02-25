/This way find data
// query{
//     userList{
//       id,
//     }
//   }

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
