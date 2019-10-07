const Donation = require("../models/Donation")

class DonationController {

    async all(req, res) {
        const query = {}
        if (req.query.id) {
            query.donation_id = req.query.id
        }
        let donations = await Donation.find(query)
        res.json(donations)
    }

    async middleware(req, res, next) {
        const {
            id
        } = req.params
        req.donation = await Donation.findOne({
            donation_id: {
                $regex: new RegExp("^" + id.toLowerCase(), "i")
            }
        })
        next()
    }

    get(req, res) {
        res.status(200).json(req.donation)
    }


}

module.exports = new DonationController