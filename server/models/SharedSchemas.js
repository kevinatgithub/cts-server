const mongoose = require("mongoose")

const {Schema} = mongoose

let facility = {
    facility_name: String,
    address: String,
    facilty_cd: String,
    region: String,
    pathologist: String,
}

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
    }),
    
    Donation : new Schema({
        donation_id: {
            type : String,
            unique : true
        },
        blood_type: String,
        donation_dt: String,
        reactiveResults: Array,
        facility: facility,
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
    }),
    
    User : new Schema({
        _id : String,
        password: String,
        facility_cd : String,
        facility: facility,
        ulevel : Number,
        name: String,
        position: String
    }),
    
    Specimen : new Schema({
        _id : Number,
        name : String
    })
}