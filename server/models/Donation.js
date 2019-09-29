const mongoose = require("mongoose");

const {Schema} = mongoose

module.exports = mongoose.model("Donation",new Schema({
    donation_id: String,
    blood_type: String,
    donation_dt: String,
    reactiveResults: Array,
    facility: {
        facility_name: String,
        address: String,
        facilty_cd: String,
        region: String,
        pathologist: String,
    },
    donor: {
        initials: String,
        dob: String,
        nationality: String,
        civil_status: String,
        occupation: String,
        home_address: String,
        frequency: String,
        prev_donation: String,
    },
    donation_type: String
}))