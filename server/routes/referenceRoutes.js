const express = require('express')
const router = express.Router()


/* #region  Cryoboxes */
const CryoboxController = require("../controllers/CryoboxController")
router.route("/cryoboxes")
    .get(CryoboxController.get)
    .post(CryoboxController.post)

router.use("/cryoboxes/:id", CryoboxController.middleware)

router.route("/cryoboxes/:id")
    .get(CryoboxController.fetch)
    .put(CryoboxController.put)
    .patch(CryoboxController.patch)
    .delete(CryoboxController.remove)
/* #endregion */

/* #region  Couriers */
const CourierController = require("../controllers/CourierController")
router.route("/couriers")
    .get(CourierController.get)
    .post(CourierController.post)

router.use("/couriers/:id", CourierController.middleware)

router.route("/couriers/:id")
    .get(CourierController.fetch)
    .put(CourierController.put)
    .patch(CourierController.patch)
    .delete(CourierController.remove)
/* #endregion */

/* #region  Eia Results */
const EiaResultController = require("../controllers/EiaResultController")
router.route("/eia_results")
    .get(EiaResultController.get)
    .post(EiaResultController.post)

router.use("/eia_results/:id", EiaResultController.middleware)

router.route("/eia_results/:id")
    .get(EiaResultController.fetch)
    .put(EiaResultController.put)
    .patch(EiaResultController.patch)
    .delete(EiaResultController.remove)
/* #endregion */

/* #region  Geenius Hiv Interpretations */
const GeeniusHivInterpretationController = require("../controllers/GeeniusHivInterpretationController")
router.route("/geenius")
    .get(GeeniusHivInterpretationController.get)
    .post(GeeniusHivInterpretationController.post)

router.use("/geenius/:id", GeeniusHivInterpretationController.middleware)

router.route("/geenius/:id")
    .get(GeeniusHivInterpretationController.fetch)
    .put(GeeniusHivInterpretationController.put)
    .patch(GeeniusHivInterpretationController.patch)
    .delete(GeeniusHivInterpretationController.remove)
/* #endregion */

/* #region  Kit Methods */
const KitMethodsController = require("../controllers/KitMethodsController")
router.route("/kit_methods")
    .get(KitMethodsController.get)
    .post(KitMethodsController.post)

router.use("/kit_methods/:id", KitMethodsController.middleware)

router.route("/kit_methods/:id")
    .get(KitMethodsController.fetch)
    .put(KitMethodsController.put)
    .patch(KitMethodsController.patch)
    .delete(KitMethodsController.remove)
/* #endregion */

/* #region  Options Registry */
const OptionsRegistryController = require("../controllers/OptionsRegistryController")
router.route("/options_registry")
    .get(OptionsRegistryController.get)
    .post(OptionsRegistryController.post)

router.use("/options_registry/:id", OptionsRegistryController.middleware)

router.route("/options_registry/:id")
    .get(OptionsRegistryController.fetch)
    .put(OptionsRegistryController.put)
    .patch(OptionsRegistryController.patch)
    .delete(OptionsRegistryController.remove)
/* #endregion */

/* #region  Machines */
const MachinesController = require("../controllers/MachinesController")
router.route("/machines")
    .get(MachinesController.get)
    .post(MachinesController.post)

router.use("/machines/:id", MachinesController.middleware)

router.route("/machines/:id")
    .get(MachinesController.fetch)
    .put(MachinesController.put)
    .patch(MachinesController.patch)
    .delete(MachinesController.remove)
/* #endregion */

/* #region  Particle Agglutinations */
const ParticleAgglutinationsController = require("../controllers/ParticleAgglutinationsController")
router.route("/particle_agglutinations")
    .get(ParticleAgglutinationsController.get)
    .post(ParticleAgglutinationsController.post)

router.use("/particle_agglutinations/:id", ParticleAgglutinationsController.middleware)

router.route("/particle_agglutinations/:id")
    .get(ParticleAgglutinationsController.fetch)
    .put(ParticleAgglutinationsController.put)
    .patch(ParticleAgglutinationsController.patch)
    .delete(ParticleAgglutinationsController.remove)
/* #endregion */

/* #region  PCR Results */
const PcrResultsController = require("../controllers/PcrResultsController")
router.route("/pcr_results")
    .get(PcrResultsController.get)
    .post(PcrResultsController.post)

router.use("/pcr_results/:id", PcrResultsController.middleware)

router.route("/pcr_results/:id")
    .get(PcrResultsController.fetch)
    .put(PcrResultsController.put)
    .patch(PcrResultsController.patch)
    .delete(PcrResultsController.remove)
/* #endregion */

/* #region  Reagents */
const ReagentsController = require("../controllers/ReagentsController")
router.route("/reagents")
    .get(ReagentsController.get)
    .post(ReagentsController.post)

router.use("/reagents/:id", ReagentsController.middleware)

router.route("/reagents/:id")
    .get(ReagentsController.fetch)
    .put(ReagentsController.put)
    .patch(ReagentsController.patch)
    .delete(ReagentsController.remove)
/* #endregion */

/* #region  Reject Reasons */
const RejectReasonsController = require("../controllers/RejectReasonsController")
router.route("/reject_reasons")
    .get(RejectReasonsController.get)
    .post(RejectReasonsController.post)

router.use("/reject_reasons/:id", RejectReasonsController.middleware)

router.route("/reject_reasons/:id")
    .get(RejectReasonsController.fetch)
    .put(RejectReasonsController.put)
    .patch(RejectReasonsController.patch)
    .delete(RejectReasonsController.remove)
/* #endregion */

/* #region  Report Templates */
const ReportTemplateController = require("../controllers/ReportTemplateController")
router.route("/report_templates")
    .get(ReportTemplateController.get)
    .post(ReportTemplateController.post)

router.use("/report_templates/:id", ReportTemplateController.middleware)

router.route("/report_templates/:id")
    .get(ReportTemplateController.fetch)
    .put(ReportTemplateController.put)
    .patch(ReportTemplateController.patch)
    .delete(ReportTemplateController.remove)
/* #endregion */

/* #region  Result Options */
const ResultOptionsController = require("../controllers/ResultOptionsController")
router.route("/result_options")
    .get(ResultOptionsController.get)
    .post(ResultOptionsController.post)

router.use("/result_options/:id", ResultOptionsController.middleware)

router.route("/result_options/:id")
    .get(ResultOptionsController.fetch)
    .put(ResultOptionsController.put)
    .patch(ResultOptionsController.patch)
    .delete(ResultOptionsController.remove)
/* #endregion */

/* #region  Specimens */
const SpecimenController = require("../controllers/SpecimenController")
router.route("/specimens")
    .get(SpecimenController.get)
    .post(SpecimenController.post)

router.use("/specimens/:id", SpecimenController.middleware)

router.route("/specimens/:id")
    .get(SpecimenController.fetch)
    .put(SpecimenController.put)
    .patch(SpecimenController.patch)
    .delete(SpecimenController.remove)
/* #endregion */

/* #region  Western Bloot HIV */
const WesternBlootHivController = require("../controllers/WesternBlootHivController")
router.route("/western_bloot_hiv")
    .get(WesternBlootHivController.get)
    .post(WesternBlootHivController.post)

router.use("/western_bloot_hiv/:id", WesternBlootHivController.middleware)

router.route("/western_bloot_hiv/:id")
    .get(WesternBlootHivController.fetch)
    .put(WesternBlootHivController.put)
    .patch(WesternBlootHivController.patch)
    .delete(WesternBlootHivController.remove)
/* #endregion */

/* #region  Test Protocols */
const TestProtocolController = require("../controllers/TestProtocolController")
router.route("/test_protocols")
    .get(TestProtocolController.get)
    .post(TestProtocolController.post)

router.use("/test_protocols/:id", TestProtocolController.middleware)

router.route("/test_protocols/:id")
    .get(TestProtocolController.fetch)
    .put(TestProtocolController.put)
    .patch(TestProtocolController.patch)
    .delete(TestProtocolController.remove)

router.route("/test_protocols/:id/fields")
    .get(TestProtocolController.fields)
router.route("/test_protocols/:id/fields/:fid")
    .get(TestProtocolController.fields)
/* #endregion */

module.exports = router