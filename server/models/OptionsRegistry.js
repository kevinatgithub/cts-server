const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Options_Registry",new Schema({
    _id : Number,
    category : String,
    name : String
}))