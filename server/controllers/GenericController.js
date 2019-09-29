class GenericController{

    static async get(model,req, res){
        const query = {}
        if(req.query.id){
            query._id = req.query.id
        }
        let record = await model.find(query)
        res.json(record)
    }

    static post(model,req,res){
        const record = new model(req.body)
        record.save()
        return res.status(201).json(record)
    }

    static async middleware(model,req,res,next){
        const {id} = req.params
        req.record = await model.findById(id)
        if(!req.record){
            return res.status(404).send("Not Found")
        }
        next()
    }

    static fetch(req,res){
        return res.status(200).json(req.record)
    }

    static put(req,res){
        const {record} = req
        const {name} = req.body
        record.name = name
        record.save()
        return res.status(200).json(record)
    }

    static patch(req,res){
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

    static remove(req,res){
        req.record.delete()
        return res.status(200).send({ok:1})
    }
}

module.exports = GenericController