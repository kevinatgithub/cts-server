const _ = require("lodash")
const Referral = require("../models/Referral")

class ReferralController{

    async get(req, res){
        const query = {}
        if(req.query.id){
            query._id = req.query.id
        }
        let referrals = await Referral.find(query)
        res.json(referrals)
    }

    post(req,res){
        const referral = new Referral(req.body)
        referral.save((err,ref) => {
            if(err){
                return res.status(400).json(err)
            }
            return res.status(201).json(referral)
        })
    }

    async middleware(req,res,next){
        const {id} = req.params
        req.referral = await Referral.findOne({confirmatory_reference_number : id})
        if(!req.referral){
            return res.status(404).send("Not Found")
        }
        next()
    }

    fetch(req,res){
        return res.status(200).json(req.referral)
    }

    put(req,res){
        const {referral} = req
        if(req.body._id){
            delete req.body._id
        }
        _.extend(referral,req.body)
        referral.save()
        return res.status(200).json(referral)
    }

    remove(req,res){
        req.referral.delete()
        return res.status(200).send({ok:1})
    }

    async unstoredReferrals(req,res){
        // r.cryobox == undefined && ((r.received_dt != null || r.received_dt != undefined) && r.reject_reason == undefined
        let referrals = await Referral.find({
            cryobox : {
                $exists : true,
                $eq : null
            },
            reject_reason : {
                $exists : false
            },
            received_dt : {
                $exists : true,
                $eq : null
            }
        })
        return res.status(200).json(referrals)
    }
}

module.exports = new ReferralController