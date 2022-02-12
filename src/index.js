const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

const {connectDB} = require("./db");

async function main(){
    await connectDB();
    app.listen(port, () => console.log("server listening on port", 9000))
}

main();