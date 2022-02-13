//Imports
const {connect, connection} = require("mongoose")

//URL to mongodb atlas
const MONGODB_URL = "mongodb+srv://hackaton2022:hackaton2022@cluster0.w2ojj.mongodb.net/hackaton2022?retryWrites=true&w=majority";

//Connecte a db
const connectDB = async ()=>{
    await connect(MONGODB_URL)
}

//Show a error
connection.on("error",  err=> console.log(err))

//Exported configuration
module.exports ={
    connectDB,
    connection
}