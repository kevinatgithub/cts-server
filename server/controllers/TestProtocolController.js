const TestProtocol = require("../models/TestProtocol")

class TestProtocolController{

    async get(req, res){
        const query = {}
        if(req.query.id){
            query._id = req.query.id
        }
        let record = await TestProtocol.find(query)
        res.json(record)
    }

    post(req,res){
        const record = new TestProtocol(req.body)
        record.save()
        return res.status(201).json(record)
    }

    async middleware(req,res,next){
        const {id} = req.params
        req.record = await TestProtocol.findById(id)
        if(!req.record){
            return res.status(404).send("Not Found")
        }
        next()
    }

    fetch(req,res){
        return res.status(200).json(req.record)
    }

    put(req,res){
        const {record} = req
        const {name,tti} = req.body
        record.name = name
        record.tti = tti
        record.save()
        return res.status(200).json(record)
    }

    patch(req,res){
        const {record} = req
        if(req.body._id){
            delete req.body._id
        }
        Object.entries(req.body).forEach(i => {
            record[i[0]] = i[1]
        })
        record.save()
        return res.status(200).json(record)
    }

    remove(req,res){
        req.record.delete()
        return res.status(200).send({ok:1})
    }

    fields(req,res){
        let index = req.params.fid || null
        if(index){
            return res.status(200).json(req.record.fields[index])
        }
        return res.status(200).json(req.record.fields)
    }
}

module.exports = new TestProtocolController