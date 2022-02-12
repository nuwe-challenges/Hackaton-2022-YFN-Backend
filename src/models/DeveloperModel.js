const { Schema, model } = require("mongoose");

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

module.exports = model("developers", developerSchema)