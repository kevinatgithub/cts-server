const GenericController = require("./GenericController")
const Courier = require("../models/Courier")

class CourierController extends GenericController{
    static get(req,res){
        return super.get(Courier,req,res)
    }

    static post(req,res){
        return super.post(Courier,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(Courier,req,res,next)
    }
}

module.exports = CourierController