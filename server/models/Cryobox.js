const mongoose = require("mongoose");

const {Cryobox} = require("./SharedSchemas.js")

module.exports = mongoose.model("Cryobox",Cryobox)