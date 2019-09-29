const GenericController = require("./GenericController")
const Machine = require("../models/Machine")

class MachineController extends GenericController{
    static get(req,res){
        return super.get(Machine,req,res)
    }

    static post(req,res){
        return super.post(Machine,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(Machine,req,res,next)
    }
}

module.exports = MachineController