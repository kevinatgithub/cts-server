const GenericController = require("./GenericController")
const ResultOption = require("../models/ResultOption")

class ResultOptionsController extends GenericController{
    static get(req,res){
        return super.get(ResultOption,req,res)
    }

    static post(req,res){
        return super.post(ResultOption,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(ResultOption,req,res,next)
    }
}

module.exports = ResultOptionsController