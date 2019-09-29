const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Report_Template",new Schema({
    html: String,
    name: String,
    report_type: String,
    source: String
}))