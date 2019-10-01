const mongoose = require("mongoose");

const {Donation} = require("./SharedSchemas")

module.exports = mongoose.model("Donation",Donation)