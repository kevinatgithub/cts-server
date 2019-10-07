const express = require('express')
const router = express.Router()


/* #region  Cryoboxes */
/**
     * @swagger
     * /cryoboxes:
     *   get:
     *     tags : [cryoboxes]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [cryoboxes]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : cryoboxes
     * /cryoboxes/{id}:
     *  get:
     *      tags : [cryoboxes]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [cryoboxes]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [cryoboxes]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [cryoboxes]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /couriers:
     *   get:
     *     tags : [couriers]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [couriers]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : couriers
     * /couriers/{id}:
     *  get:
     *      tags : [couriers]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [couriers]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [couriers]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [couriers]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /eia_results:
     *   get:
     *     tags : [eia_results]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [eia_results]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : eia_results
     * /eia_results/{id}:
     *  get:
     *      tags : [eia_results]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [eia_results]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [eia_results]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [eia_results]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /geenius_hiv_interpretations:
     *   get:
     *     tags : [geenius_hiv_interpretations]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [geenius_hiv_interpretations]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : geenius_hiv_interpretations
     * /geenius_hiv_interpretations/{id}:
     *  get:
     *      tags : [geenius_hiv_interpretations]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [geenius_hiv_interpretations]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [geenius_hiv_interpretations]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [geenius_hiv_interpretations]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
const GeeniusHivInterpretationController = require("../controllers/GeeniusHivInterpretationController")
router.route("/geenius_hiv_interpretations")
    .get(GeeniusHivInterpretationController.get)
    .post(GeeniusHivInterpretationController.post)

router.use("/geenius_hiv_interpretations/:id", GeeniusHivInterpretationController.middleware)

router.route("/geenius_hiv_interpretations/:id")
    .get(GeeniusHivInterpretationController.fetch)
    .put(GeeniusHivInterpretationController.put)
    .patch(GeeniusHivInterpretationController.patch)
    .delete(GeeniusHivInterpretationController.remove)
/* #endregion */

/* #region  Kit Methods */
/**
     * @swagger
     * /kit_methods:
     *   get:
     *     tags : [kit_methods]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [kit_methods]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : kit_methods
     * /kit_methods/{id}:
     *  get:
     *      tags : [kit_methods]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [kit_methods]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [kit_methods]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [kit_methods]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /options_registry:
     *   get:
     *     tags : [options_registry]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [options_registry]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : options_registry
     * /options_registry/{id}:
     *  get:
     *      tags : [options_registry]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [options_registry]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [options_registry]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [options_registry]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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

router.route("/options_registry/categories")
    .get(OptionsRegistryController.categories)
/* #endregion */

/* #region  Machines */
/**
     * @swagger
     * /machines:
     *   get:
     *     tags : [machines]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [machines]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : machines
     * /machines/{id}:
     *  get:
     *      tags : [machines]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [machines]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [machines]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [machines]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /particle_agglutinations:
     *   get:
     *     tags : [particle_agglutinations]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [particle_agglutinations]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : particle_agglutinations
     * /particle_agglutinations/{id}:
     *  get:
     *      tags : [particle_agglutinations]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [particle_agglutinations]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [particle_agglutinations]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [particle_agglutinations]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /pcr_results:
     *   get:
     *     tags : [pcr_results]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [pcr_results]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : pcr_results
     * /pcr_results/{id}:
     *  get:
     *      tags : [pcr_results]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [pcr_results]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [pcr_results]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [pcr_results]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /reagents:
     *   get:
     *     tags : [reagents]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [reagents]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : reagents
     * /reagents/{id}:
     *  get:
     *      tags : [reagents]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [reagents]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [reagents]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [reagents]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /reject_reasons:
     *   get:
     *     tags : [reject_reasons]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [reject_reasons]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : reject_reasons
     * /reject_reasons/{id}:
     *  get:
     *      tags : [reject_reasons]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [reject_reasons]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [reject_reasons]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [reject_reasons]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /report_templates:
     *   get:
     *     tags : [report_templates]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [report_templates]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : report_template
     * /report_templates/{id}:
     *  get:
     *      tags : [report_templates]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [report_templates]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [report_templates]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [report_templates]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
   * @swagger
   * /result_options:
   *   get:
   *     tags : [Result Options]
   *     description: Get all result options
   *     responses:
   *       200:
   *         description: JSON array
   *   post:
   *    tags : [Result Options]
   *    responses:
   *        200:
   *            description: JSON object
   *    parameters:
   *        - in  : body
   *          name : Result Option
   */
router.route("/result_options")
    .get(ResultOptionsController.get)
    .post(ResultOptionsController.post)
/**
 * @swagger
 * /result_options/{id}:
 *  get:
 *      tags : [Result Options]
 *      description: Get specific result option using id
 *      responses:
 *          200:
 *              description: JSON object
 *      parameters:
 *          - in : path
 *            name : id
 *            required : true
 *  put:
 *      tags : [Result Options]
 *      description : Update result option value
 *      responses:
 *          200:
 *              description: JSON object
 *      parameters:
 *          - in : path
 *            name : id
 *            required : true
 *          - in : body
 *            name : Result Option
 *            required : true
 *  patch:
 *      tags : [Result Options]
 *      description : Update result option value
 *      responses:
 *          200:
 *              description: JSON object
 *      parameters:
 *          - in : path
 *            name : id
 *            required : true
 *          - in : body
 *            name : Result Option
 *            required : true
 *  delete:
 *      tags : [Result Options]
 *      responses:
 *          200:
 *              description : OK
 *      parameters:
 *          - in : path
 *            name : id
 *            required : true
 */
router.use("/result_options/:id", ResultOptionsController.middleware)

router.route("/result_options/:id")
    .get(ResultOptionsController.fetch)
    .put(ResultOptionsController.put)
    .patch(ResultOptionsController.patch)
    .delete(ResultOptionsController.remove)
/* #endregion */

/* #region  Serodia Hiv Interpretation */
    /**
     * @swagger
     * /serodia_hiv_interpretations:
     *   get:
     *     tags : [Serodia HIV Interpretations]
     *     description: Get all Serodia HIV INterpretations
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [Serodia HIV Interpretations]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : Serodia HIV Interpretation
     */
    const SerodiaHivInterpretationController = require("../controllers/SerodiaHivInterpretationController")
    router.route("/serodia_hiv_interpretations")
    .get(SerodiaHivInterpretationController.get)
        .post(SerodiaHivInterpretationController.post)
    
    /**
     * @swagger
     * /serodia_hiv_interpretations/{id}:
     *  get:
     *      tags : [Serodia HIV Interpretations]
     *      description: Get specific Serodia HIV INterpretations using id
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [Serodia HIV Interpretations]
     *      description : Update Serodia HIV INterpretations value
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [Serodia HIV Interpretations]
     *      description : Update Serodia HIV INterpretations value
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [Serodia HIV Interpretations]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */    
    router.use("/serodia_hiv_interpretations/:id", SerodiaHivInterpretationController.middleware)
    
    router.route("/serodia_hiv_interpretations/:id")
    .get(SerodiaHivInterpretationController.fetch)
    .put(SerodiaHivInterpretationController.put)
    .patch(SerodiaHivInterpretationController.patch)
    .delete(SerodiaHivInterpretationController.remove)
/* #endregion */

/* #region  Specimens */
/**
     * @swagger
     * /specimens:
     *   get:
     *     tags : [specimens]
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [specimens]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : specimen
     * /specimens/{id}:
     *  get:
     *      tags : [specimens]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [specimens]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [specimens]
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [specimens]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /western_bloot_hiv:
     *   get:
     *     tags : [western_bloot_hiv]
     *     description: Get all western_bloot_hiv
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [western_bloot_hiv]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : western_bloot_hiv
     * /western_bloot_hiv/{id}:
     *  get:
     *      tags : [western_bloot_hiv]
     *      description: Get specific western_bloot_hiv using id
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [western_bloot_hiv]
     *      description : Update western_bloot_hiv
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [western_bloot_hiv]
     *      description : Update western_bloot_hiv
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [western_bloot_hiv]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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
/**
     * @swagger
     * /test_protocols:
     *   get:
     *     tags : [Test Protocols]
     *     description: Get all Test Protocols
     *     responses:
     *       200:
     *         description: JSON array
     *   post:
     *    tags : [Test Protocols]
     *    responses:
     *        200:
     *            description: JSON object
     *    parameters:
     *        - in  : body
     *          name : Test Protocol
     */
const TestProtocolController = require("../controllers/TestProtocolController")
router.route("/test_protocols")
    .get(TestProtocolController.get)
    .post(TestProtocolController.post)
/**
     * @swagger
     * /test_protocols/{id}:
     *  get:
     *      tags : [Test Protocols]
     *      description: Get specific Test Protocols using id
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *  put:
     *      tags : [Test Protocols]
     *      description : Update Test Protocols
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  patch:
     *      tags : [Test Protocols]
     *      description : Update Test Protocols
     *      responses:
     *          200:
     *              description: JSON object
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     *          - in : body
     *            name : Result Option
     *            required : true
     *  delete:
     *      tags : [Test Protocols]
     *      responses:
     *          200:
     *              description : OK
     *      parameters:
     *          - in : path
     *            name : id
     *            required : true
     */
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