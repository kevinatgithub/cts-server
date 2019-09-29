const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Result_Option",new Schema({
    _id : Number,
    name : String
}))