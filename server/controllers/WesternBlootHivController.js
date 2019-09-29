const GenericController = require("./GenericController")
const WesternBlootHiv = require("../models/WesternBlootHiv")

class WesternBlootHivController extends GenericController{
    static get(req,res){
        return super.get(WesternBlootHiv,req,res)
    }

    static post(req,res){
        return super.post(WesternBlootHiv,req,res)
    }

    static middleware(req,res,next){
        return super.middleware(WesternBlootHiv,req,res,next)
    }
}

module.exports = WesternBlootHivController