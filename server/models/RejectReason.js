const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Reject_Reason",new Schema({
    _id : Number,
    name: String
}))