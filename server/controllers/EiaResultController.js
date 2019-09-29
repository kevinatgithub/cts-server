const GenericController = require("./GenericController")
const EiaResult = require("../models/EiaResult")

class EiaResultController extends GenericController{
    static get(req,res){
        return super.get(EiaResult,req,res)
    }

    static post(req,res){
        return super.post(EiaResult,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(EiaResult,req,res,next)
    }
}

module.exports = EiaResultController