const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Kit_Method",new Schema({
    _id : Number,
    name : String
}))