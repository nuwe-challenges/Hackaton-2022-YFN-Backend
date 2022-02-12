const {connect, connection} = require("mongoose")

const MONGODB_URL = "mongodb+srv://hackaton2022:hackaton2022@cluster0.w2ojj.mongodb.net/hackaton2022?retryWrites=true&w=majority";

const connectDB = async ()=>{
    await connect(MONGODB_URL)
}

connection.on("error",  err=> console.log(err))

module.exports ={
    connectDB,
    connection
}