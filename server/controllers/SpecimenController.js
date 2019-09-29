const GenericController = require("./GenericController")
const Specimen = require("../models/Specimen")

class SpecimenController extends GenericController{
    static get(req,res){
        return super.get(Specimen,req,res)
    }

    static post(req,res){
        return super.post(Specimen,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(Specimen,req,res,next)
    }
}

module.exports = SpecimenController