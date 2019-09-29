const GenericController = require("./GenericController")
const RejectReason = require("../models/RejectReason")

class RejectReasonController extends GenericController{
    static get(req,res){
        return super.get(RejectReason,req,res)
    }

    static post(req,res){
        return super.post(RejectReason,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(RejectReason,req,res,next)
    }
}

module.exports = RejectReasonController