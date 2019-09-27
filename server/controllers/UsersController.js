const User = require("../models/User")

class UsersController{

    async get(req, res){
        const query = {}
        if(req.query.id){
            query._id = req.query.id
        }
        let users = await User.find(query)
        res.json(users)
    }

    post(req,res){
        const user = new User(req.body)
        user.save()
        return res.status(201).json(user)
    }

    async middleware(req,res,next){
        const {id} = req.params
        req.user = await User.findById(id)
        if(!req.user){
            return res.status(404).send("Not Found")
        }
        next()
    }

    fetch(req,res){
        return res.status(200).json(req.user)
    }

    put(req,res){
        const {user} = req
        const {name,info:{tags,color}} = req.body
        user.name = name
        user.info.tags = tags
        user.info.color = color
        user.save()
        return res.status(200).json(user)
    }

    patch(req,res){
        const {user} = req
        if(req.body._id){
            delete req.body._id
        }
        Object.entries(req.body).forEach(i => {
            user[i[0]] = i[1]
        })
        req.user.save()
        return res.status(200).json(user)
    }

    remove(req,res){
        req.user.delete()
        return res.status(200).send({ok:1})
    }
}

module.exports = new UsersController