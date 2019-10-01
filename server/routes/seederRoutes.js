const express = require('express')
const router = express.Router()
const DonationSeeder = require('../seeders/DonationSeeder')
const ReferenceSeeder = require('../seeders/ReferenceSeeder')
const OptionsRegistrySeeder = require('../seeders/OptionsRegistrySeeder')
const TestProtocolSeeder = require('../seeders/TestProtocolSeeder')
const UserSeeder = require('../seeders/UserSeeder')

router.route("/all").get((req,res) => {
    DonationSeeder.run()
    OptionsRegistrySeeder.run()
    TestProtocolSeeder.run()
    ReferenceSeeder.couriers()
    ReferenceSeeder.specimens()
    ReferenceSeeder.machines()
    ReferenceSeeder.reagents()
    ReferenceSeeder.kitMethods()
    ReferenceSeeder.resultOptions()
    ReferenceSeeder.particleAgglutinations()
    ReferenceSeeder.serodiaHivInterpretations()
    ReferenceSeeder.eiaResults()
    ReferenceSeeder.westernBlootHiv()
    ReferenceSeeder.pcrResults()
    ReferenceSeeder.geeniusHivInterpretation()
    ReferenceSeeder.rejectReasons()
    res.send("ok")
})

router.route("/donations").get((req,res) => {
    DonationSeeder.run()
    res.send("ok")
})


router.route("/options").get((req,res) => {
    OptionsRegistrySeeder.run()
    res.send("ok")
})

router.route("/test").get((req,res) => {
    TestProtocolSeeder.run()
    res.send("ok")
})

router.route("/references").get((req,res) => {
    ReferenceSeeder.cryoboxes()
    ReferenceSeeder.couriers()
    ReferenceSeeder.specimens()
    ReferenceSeeder.machines()
    ReferenceSeeder.reagents()
    ReferenceSeeder.kitMethods()
    ReferenceSeeder.resultOptions()
    ReferenceSeeder.particleAgglutinations()
    ReferenceSeeder.serodiaHivInterpretations()
    ReferenceSeeder.eiaResults()
    ReferenceSeeder.westernBlootHiv()
    ReferenceSeeder.pcrResults()
    ReferenceSeeder.geeniusHivInterpretation()
    ReferenceSeeder.rejectReasons()
    res.send("ok")
})

router.route("/users").get((req,res) => {
    UserSeeder.run()
    res.send("ok")
})


module.exports = router