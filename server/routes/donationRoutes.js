const express = require('express')
const router = express.Router()
const DonationController = require("../controllers/DonationController")


router.use("/:id",DonationController.middleware)

router.route("/:id")
    .get(DonationController.get)

module.exports = router