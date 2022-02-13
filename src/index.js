//Import
const express = require("express");
const app = express();

//uses the default port in case of production, in local use the port 9000
const port = process.env.PORT || 9000;

//Import the commanders
require("./console/commandsDeveloper");

//Connected with db
const {connectDB} = require("./db");

async function main(){
    await connectDB();
    app.listen(port);
}

main();