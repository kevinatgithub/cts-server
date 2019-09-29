const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Specimen",new Schema({
    _id : Number,
    name : String
}))