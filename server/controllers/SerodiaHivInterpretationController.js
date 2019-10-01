const GenericController = require("./GenericController")
const SerodiaHivInterpretation = require("../models/SerodiaHivInterpretation")

class SerodiaHivInterpretationController extends GenericController{
    static get(req,res){
        return super.get(SerodiaHivInterpretation,req,res)
    }

    static post(req,res){
        return super.post(SerodiaHivInterpretation,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(SerodiaHivInterpretation,req,res,next)
    }
}

module.exports = SerodiaHivInterpretationController