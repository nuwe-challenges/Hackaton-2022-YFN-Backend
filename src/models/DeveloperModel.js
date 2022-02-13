//Imports
const { Schema, model } = require("mongoose");

//Schema mongoose developer
const developerSchema = new Schema({
    name: {type: String},
    email:{type:String},
    category:{type:String},
    phone:{type:String},
    date:{type:String},
},{
    timestamps:false,
    versionKey:false
})

//Export the model developer
module.exports = model("developers", developerSchema)