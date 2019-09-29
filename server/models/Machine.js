const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Machine",new Schema({
    _id : Number,
    name : String
}))