const Donation = require("../models/Donation")

class DonationController{

    async middleware(req,res,next){
        const {id} = req.params
        req.donation = await Donation.findOne({donation_id : /^id$/i})
        next()
    }

    get(req,res){
        res.status(200).json({donation:req.donation})
    }


}

module.exports = new DonationController