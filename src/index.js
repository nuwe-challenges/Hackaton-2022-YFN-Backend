const express = require("express");
const app = express();
const port = process.env.PORT || 9000;

require("./console/commandsDeveloper");

const {connectDB} = require("./db");

async function main(){
    await connectDB();
    app.listen(port);
}

main();