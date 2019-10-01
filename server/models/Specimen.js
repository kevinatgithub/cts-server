const mongoose = require("mongoose");

const {Specimen} = require("./SharedSchemas")

module.exports = mongoose.model("Specimen",Specimen)