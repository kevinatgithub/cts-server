const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Serodia_Hiv_Interpretation",new Schema({
    _id : Number,
    name : String
}))