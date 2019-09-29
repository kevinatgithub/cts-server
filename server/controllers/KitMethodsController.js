const GenericController = require("./GenericController")
const KitMethod = require("../models/KitMethod")

class KitMethodsController extends GenericController{
    static get(req,res){
        return super.get(KitMethod,req,res)
    }

    static post(req,res){
        return super.post(KitMethod,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(KitMethod,req,res,next)
    }
}

module.exports = KitMethodsController