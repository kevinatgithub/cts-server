const Cryobox = require("../models/Cryobox")

class CryoboxController{

    async get(req, res){
        const query = {}
        if(req.query.id){
            query._id = req.query.id
        }
        let cryobox = await Cryobox.find(query)
        res.json(cryobox)
    }

    post(req,res){
        const cryobox = new Cryobox(req.body)
        cryobox.save()
        return res.status(201).json(cryobox)
    }

    async middleware(req,res,next){
        const {id} = req.params
        req.cryobox = await Cryobox.findById(id)
        if(!req.cryobox){
            return res.status(404).send("Not Found")
        }
        next()
    }

    fetch(req,res){
        return res.status(200).json(req.cryobox)
    }

    put(req,res){
        const {cryobox} = req
        const {cryobox_no,columns,rows,content} = req.body
        cryobox.cryobox_no = cryobox_no
        cryobox.columns = columns
        cryobox.rows = rows
        cryobox.content = content
        cryobox.save()
        return res.status(200).json(cryobox)
    }

    patch(req,res){
        const {cryobox} = req
        if(req.body._id){
            delete req.body._id
        }
        Object.entries(req.body).forEach(i => {
            cryobox[i[0]] = i[1]
        })
        cryobox.save()
        return res.status(200).json(cryobox)
    }

    remove(req,res){
        req.cryobox.delete()
        return res.status(200).send({ok:1})
    }
}

module.exports = new CryoboxController