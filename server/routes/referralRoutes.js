const express = require('express')
const router = express.Router()
const ReferralController = require("../controllers/ReferralController")

/**
 * @swagger
 * /referrals/unstored:
 *  get:
 *      tags : [referrals]
 *      description : Get all unstored in cryobox referrals
 *      responses:
 *          200:
 *              description : JSON OBject array of unstored referrals
 * /referrals:
 *  get:
 *      tags : [referrals]
 *      description : Get a referral
 *      responses:
 *          200:
 *              description : JSON Object of referral
 *  post:
 *      tags : [referrals]
 *      description : create a new referral record
 *      responses:
 *          200:
 *              description : JSON Object of new created referral
 *      parameters:
 *          - in : body
 *            name : referral object
 *            required : true
 * /referrals/{id}:
 *  get:
 *      tags : [referrals]
 *      description : get a specific referral record using the confirmatory referrence number
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *      responses : 
 *          200:
 *              description : JSON Object of a referral
 *  put:
 *      tags: [referrals]
 *      description : update a specific referral
 *      parameters : 
 *          - in : path
 *            name : id
 *            required : true
 *          - in : body
 *            name : referral json object
 *            required : true
 *      responses : 
 *          200:
 *              description : JSON Object of the updated referral
 *  delete:
 *      tags: [referrals]
 *      description : delete  a specific referral using confirmatory reference number
 *      parameters :
 *          - in : path
 *            name : id
 *            required : true
 *      responses : 
 *          200:
 *              description : OK
 */
router.route("/unstored")
    .get(ReferralController.unstoredReferrals)
    
router.route("/")
    .get(ReferralController.get)
    .post(ReferralController.post)

router.use("/:id",ReferralController.middleware)

router.route("/:id")
    .get(ReferralController.fetch)
    .put(ReferralController.put)
    .delete(ReferralController.remove)


module.exports = router