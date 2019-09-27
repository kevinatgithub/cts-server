const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("User",new Schema({
    _id : String,
    password: String,
    ulevel: Number,
    name: String,
    position: String
}))