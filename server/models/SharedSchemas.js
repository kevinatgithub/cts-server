const mongoose = require("mongoose")

const {Schema} = mongoose

module.exports = {
    Courier : new Schema({
        _id : Number,
        name : String
    }),
    Cryobox : new Schema({
        _id : Number,
        cryobox_no: String,
        columns: Number,
        rows: Number,
        content: [
            {
                confirmatory_reference_number: String,
                x: Number,
                y: Number
            }
        ]
    })
}