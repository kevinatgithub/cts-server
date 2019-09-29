const GenericController = require("./GenericController")
const ParticleAgglutination = require("../models/ParticleAgglutination")

class ParticleAgglutinationsController extends GenericController{
    static get(req,res){
        return super.get(ParticleAgglutination,req,res)
    }

    static post(req,res){
        return super.post(ParticleAgglutination,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(ParticleAgglutination,req,res,next)
    }
}

module.exports = ParticleAgglutinationsController