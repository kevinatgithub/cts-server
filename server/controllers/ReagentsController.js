const GenericController = require("./GenericController")
const Reagent = require("../models/Reagent")

class ReagentsController extends GenericController{
    static get(req,res){
        return super.get(Reagent,req,res)
    }

    static post(req,res){
        return super.post(Reagent,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(Reagent,req,res,next)
    }
}

module.exports = ReagentsController