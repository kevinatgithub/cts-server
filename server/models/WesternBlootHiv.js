const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Western_Bloot_Hiv",new Schema({
    _id : Number,
    name : String
}))