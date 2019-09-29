const GenericController = require("./GenericController")
const GeeniusHivInterpretation = require("../models/GeeniusHivInterpretation")

class GeeniusHivInterpretationController extends GenericController{
    static get(req,res){
        return super.get(GeeniusHivInterpretation,req,res)
    }

    static post(req,res){
        return super.post(GeeniusHivInterpretation,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(GeeniusHivInterpretation,req,res,next)
    }
}

module.exports = GeeniusHivInterpretationController