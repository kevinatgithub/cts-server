const mongoose = require("mongoose");

const {User} = require("./SharedSchemas")

module.exports = mongoose.model("User",User)