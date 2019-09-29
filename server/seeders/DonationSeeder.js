const Donation = require("../models/Donation")

class DonationSeeder{
    
    static run(){
        let data = this.data()
        data.forEach(donation=>{
            var d = new Donation(donation)

            Donation.findOneAndUpdate(
                {donation_id : d.donation_id},
                d,
                {
                    upsert : true, new : true, useFindAndModify : false
                },
                (err,doc) => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        })
    }

    static data(){
        return [
            {
                donation_id: 'N1',
                blood_type: 'A POS',
                donation_dt: '2018-11-05',
                reactiveResults: [
                    'HIV',
                ],
                facility: {
                    facility_name: 'Philippine Blood Center',
                    address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd: '13006',
                    region: '13',
                    pathologist: 'Andress Bonifacio',
                },
                donor: {
                    initials: 'R.A.T.',
                    dob: "1989-03-17",
                    nationality: 'Filipino',
                    civil_status: 'Single',
                    occupation: 'I.T/Software Development',
                    home_address: 'Bulacan',
                    frequency: 'Repeat',
                    prev_donation: '2018-01-30',
                },
                donation_type: 'Voluntary'
            },
            {
                donation_id: 'N2',
                blood_type: 'O POS',
                donation_dt: '2019-01-23',
                reactiveResults: [
                    'MALA',
                ],
                facility: {
                    facility_name: 'Philippine Blood Center',
                    address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd: '13006',
                    region: '13',
                    pathologist: 'Andress Bonifacio',
                },
                donor: {
                    initials: 'R.A.T.',
                    dob: "1989-03-17",
                    nationality: 'Filipino',
                    civil_status: 'Single',
                    occupation: 'I.T/Software Development',
                    home_address: 'Bulacan',
                    frequency: 'Repeat',
                    prev_donation: '2018-01-30',
                },
                donation_type: 'Voluntary'
            },
            {
                donation_id: 'N3',
                blood_type: 'O POS',
                donation_dt: '2019-01-23',
                reactiveResults: [
                    'MALA',
                ],
                facility: {
                    facility_name: 'Philippine Blood Center',
                    address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd: '13006',
                    region: '13',
                    pathologist: 'Andress Bonifacio',
                },
                donor: {
                    initials: 'R.A.T.',
                    dob: "1989-03-17",
                    nationality: 'Filipino',
                    civil_status: 'Single',
                    occupation: 'I.T/Software Development',
                    home_address: 'Bulacan',
                    frequency: 'Repeat',
                    prev_donation: '2018-01-30',
                },
                donation_type: 'Voluntary'
            },
            {
                donation_id: 'N4',
                blood_type: 'O POS',
                donation_dt: '2019-01-23',
                reactiveResults: [
                    'MALA',
                ],
                facility: {
                    facility_name: 'Philippine Blood Center',
                    address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd: '13006',
                    region: '13',
                    pathologist: 'Andress Bonifacio',
                },
                donor: {
                    initials: 'R.A.T.',
                    dob: "1989-03-17",
                    nationality: 'Filipino',
                    civil_status: 'Single',
                    occupation: 'I.T/Software Development',
                    home_address: 'Bulacan',
                    frequency: 'Repeat',
                    prev_donation: '2018-01-30',
                },
                donation_type: 'Voluntary'
            },
            {
                donation_id: 'N5',
                blood_type: 'O POS',
                donation_dt: '2019-01-23',
                reactiveResults: [
                    'MALA',
                ],
                facility: {
                    facility_name: 'Philippine Blood Center',
                    address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd: '13006',
                    region: '13',
                    pathologist: 'Andress Bonifacio',
                },
                donor: {
                    initials: 'R.A.T.',
                    dob: "1989-03-17",
                    nationality: 'Filipino',
                    civil_status: 'Single',
                    occupation: 'I.T/Software Development',
                    home_address: 'Bulacan',
                    frequency: 'Repeat',
                    prev_donation: '2018-01-30',
                },
                donation_type: 'Voluntary'
            },
            {
                donation_id: 'N6',
                blood_type: 'O POS',
                donation_dt: '2019-01-23',
                reactiveResults: [
                    'MALA',
                ],
                facility: {
                    facility_name: 'Philippine Blood Center',
                    address: 'PBC Building, Lungcenter Comp, Quezon Ave. Q.C.',
                    facilty_cd: '13006',
                    region: '13',
                    pathologist: 'Andress Bonifacio',
                },
                donor: {
                    initials: 'R.A.T.',
                    dob: "1989-03-17",
                    nationality: 'Filipino',
                    civil_status: 'Single',
                    occupation: 'I.T/Software Development',
                    home_address: 'Bulacan',
                    frequency: 'Repeat',
                    prev_donation: '2018-01-30',
                },
                donation_type: 'Voluntary'
            },
        ]
    }
}

module.exports = DonationSeeder