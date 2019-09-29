const mongoose = require("mongoose");

const {Schema} = mongoose

const Courier = require("./Courier")
const Cryobox = require("./Cryobox")
const Donation = require("./Donation")
const User = require("./User")
const Specimen = require("./Specimen")

module.exports = mongoose.model("Referral",new Schema({
    confirmatory_reference_number : String,
    contested : Boolean,
    courierMode : {
        type : String,
        required : true
    },
    donation_id : {
        type : String,
        required : true   
    },
    shipped_dt : {
        type : Date,
        required : true
    },
    courier : Courier,
    cryobox : Cryobox,
    donation : Donation,
    received_by : User,
    specimen : Specimen,
    results : {
        bsf : {
            bsf_mt: String,
            proficiency_license: String,
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