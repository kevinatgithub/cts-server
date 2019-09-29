const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Eia_Result",new Schema({
    _id : Number,
    name : String
}))