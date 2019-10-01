const express = require('express')
const router = express.Router()
const ReferralController = require("../controllers/ReferralController")

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