const mongoose = require("mongoose")

const {Courier} = require("./SharedSchemas.js")

module.exports = mongoose.model("Courier",Courier)