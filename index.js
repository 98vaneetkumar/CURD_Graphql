const express=require('express')
const app=express()
const PORT=3001
const {graphqlHTTP}=require("express-graphql")
const schema=require("./schema/index")


app.use((req, res, next) => {
	// //Enabling CORS
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, x-client-key, x-client-token, x-client-secret, Authorization");
	next();
});

require("./dbConnection").connectDB();
const Models=require("./models/index")
//pass the radiu connection
let root={ //Pass the value that are commonly used in the query and mutation
    Models:Models 
}
//This is used for authentication
let context=async req=>{
    // console.log("Request",req.headers)
    // console.log("Request.host",req.headers.host)
}
app.use('/graphql', 
    graphqlHTTP(async req=>({
        schema,     
        rootValue:root,
        graphiql: true,
        context:()=>context(req)
})))

app.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})