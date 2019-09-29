const GenericController = require("./GenericController")
const PcrResult = require("../models/PcrResult")

class PcrResultsController extends GenericController{
    static get(req,res){
        return super.get(PcrResult,req,res)
    }

    static post(req,res){
        return super.post(PcrResult,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(PcrResult,req,res,next)
    }
}

module.exports = PcrResultsController