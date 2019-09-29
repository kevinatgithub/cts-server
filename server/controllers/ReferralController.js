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
        referral.save()
        return res.status(201).json(referral)
    }

    async middleware(req,res,next){
        const {id} = req.params
        req.referral = await Referral.findById(id)
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
        const {name,info:{tags,color}} = req.body
        user.name = name
        user.info.tags = tags
        user.info.color = color
        user.save()
        return res.status(200).json(user)
    }

    patch(req,res){
        const {user} = req
        if(req.body._id){
            delete req.body._id
        }
        Object.entries(req.body).forEach(i => {
            user[i[0]] = i[1]
        })
        user.save()
        return res.status(200).json(user)
    }

    remove(req,res){
        req.user.delete()
        return res.status(200).send({ok:1})
    }
}

module.exports = new ReferralController