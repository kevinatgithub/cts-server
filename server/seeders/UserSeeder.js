const User = require("../models/User")

class UserSeeder{

    static run(){
        let data = [
            {
                    "_id" : "bsf",
                    "password" : "1",
                    "facility_cd" : "13006",
                    "facility" : {
                            "facility_name" : "Philippine Blood Center",
                            "address" : "PBC Bldg., Lung Center Compound, Quezon Ave., Quezon City",
                            "facilty_cd" : "13006",
                            "region" : "13",
                            "pathologist" : "Andress S. Bonifacio, MD, FPSP"
                    },
                    "ulevel" : 1,
                    "name" : "Jose Manalo",
                    "position" : "Med Tech",
                    "__v" : 0
            },
            {
                    "_id" : "ritm",
                    "password" : "1",
                    "facility_cd" : "RITM",
                    "facility" : {
                            "facility_name" : "Research Institute of Tropical Medicine",
                            "address" : "",
                            "facilty_cd" : "RITM",
                            "region" : "13",
                            "pathologist" : ""
                    },
                    "ulevel" : 1,
                    "name" : "Mark Gil",
                    "position" : "Med Tech",
                    "__v" : 0
            }
        ]

        data.forEach(u=>{
            let user = new User(u)
            user.save()
        })


    }
}

module.exports = UserSeeder