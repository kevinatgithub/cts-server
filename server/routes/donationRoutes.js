const express = require('express')
const router = express.Router()
const DonationController = require("../controllers/DonationController")

/**
 * @swagger
 * /donations:
 *  get:
 *      tags : [donations]
 *      description : Get all donations (This must be disabled in production), must be hosted in NBBNETS
 *      responses:
 *          200:
 *              description : JSON OBject array of donations
 * /donations/{id}:
 *  get:
 *      tags : [donations]
 *      description : Get a specific donation using donation id
 *      responses:
 *          200:
 *              description : JSON Object of donation
 *      parameters:
 *          - in : path
 *            name : id
 *            required : true
 */
router.route("/")
    .get(DonationController.all)

router.use("/:id",DonationController.middleware)

router.route("/:id")
    .get(DonationController.get)

module.exports = router