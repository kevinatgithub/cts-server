const mongoose = require("mongoose");

const {Schema} = mongoose

const field = new Schema({
    name: String,
    type: String,
    source: String
})

module.exports = mongoose.model("Test_Protocol",new Schema({
    tti : String,
    name : String,
    fields : [
        field
    ],
    forms : [
        new Schema({
            name : String,
            fields : [
                field
            ]
        })
    ]
}))