const express = require('express')
const router = express.Router()
const UsersController = require("../controllers/UsersController")

router.route("/login")
    .post(UsersController.login)

router.route("/")
    .get(UsersController.get)
    .post(UsersController.post)

router.use("/:id",UsersController.middleware)

router.route("/:id")
    .get(UsersController.fetch)
    .put(UsersController.put)
    .patch(UsersController.patch)
    .delete(UsersController.remove)




module.exports = router