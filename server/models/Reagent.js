const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Reagent",new Schema({
    _id : Number,
    name : String
}))