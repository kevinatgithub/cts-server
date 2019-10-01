const mongoose = require("mongoose");

const {Schema} = mongoose

const {Courier,Cryobox,Donation,User,Specimen} = require("./SharedSchemas")

module.exports = mongoose.model("Referral",new Schema({
    confirmatory_reference_number : {
        type : String,
        required : true,
        unique : true
    },
    contested : Boolean,
    courierMode : {
        type : String,
        default : "courier"
    },
    donation_id : {
        type : String,
        required : true,
        unique : true
    },
    shipped_dt : {
        type : Date,
        default : Date.now()
    },
    courier : {
        type : {
            courier : Courier,
        },
        required : true
    },
    cryobox : {
        type : Cryobox,
        default : null
    },
    donation : {
        type : Donation,
        required : true
    },
    received_by : User,
    received_dt : {
        type : Date,
        default : null
    },
    specimen : {
        type : Specimen,
        required : true
    },
    results : {
        bsf : {
            bsf_mt: {
                type : String,
                required : true
            },
            proficiency_license: {
                type : String,
                required : true
            },
            kits : [
                new Schema({
                    lot_no : String,
                    optical_density : Number,
                    cutoff_value : Number,
                    interpretation : String,
                    date_tested : Date
                })
            ]
        },
        nrl : {
            hbv : [],
            hcv : [],
            hiv : [],
            mal : [],
            syp : []
        }
    }
}))