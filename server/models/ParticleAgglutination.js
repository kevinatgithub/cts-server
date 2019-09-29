const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Particle_Agglutination",new Schema({
    _id : Number,
    name : String
}))