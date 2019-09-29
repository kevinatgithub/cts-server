const Cryobox = require("../models/Cryobox")
const Courier = require("../models/Courier")
const Specimen = require("../models/Specimen")
const Machine = require("../models/Machine")
const Reagent = require("../models/Reagent")
const KitMethod = require("../models/KitMethod")
const ResultOption = require("../models/ResultOption")
const ParticleAgglutination = require("../models/ParticleAgglutination")
const SerodiaHivInterpretation = require("../models/SerodiaHivInterpretation")
const EiaResult = require("../models/EiaResult")
const WesternBlootHiv = require("../models/WesternBlootHiv")
const PcrResult = require("../models/PcrResult")
const GeeniusHivInterpretation = require("../models/GeeniusHivInterpretation")
const RejectReason = require("../models/RejectReason")

class ReferenceSeeder{

    static cryoboxes(){
        let data = [
            {
                _id : 0,
                cryobox_no : 'ABC123',
                columns : 9,
                rows : 9,
            },
            {
                _id : 1,
                cryobox_no : 'ABC124',
                columns : 9,
                rows : 9,
            }
        ]

        this.seed(data,Cryobox)
    }

    static couriers(){
        let data = [
            {_id : 0, name : 'LBC'},
            {_id : 1, name : 'GrabExpress'},
            {_id : 2, name : '2GO Express'},
            {_id : 3, name : 'Xend Business Solutions'},
            {_id : 4, name : 'JRS Express'},
            {_id : 5, name : 'DHL Express'},
            {_id : 6, name : 'Ninja Van'},
            {_id : 7, name : 'Lalamove'},
        ]

        this.seed(data,Courier)
    }
    
    static specimens(){
        let data = [
            {_id : 0, name :'Aliqouted Sample'},
            {_id : 1, name :'Whole Blood'},
            {_id : 2, name :'FFP'},
            {_id : 3, name :'PC'},
            {_id : 4, name :'PRBC'},
            {_id : 5, name :'Cryosupernate'},
            {_id : 6, name :'Cryoprecipitate'},
            {_id : 7, name :'Blood Smear'},
            {_id : 8, name :'Dried Blood Spot'},
            {_id : 9, name :'Apheresis Unit'},
        ]

        this.seed(data,Specimen)
    }

    static machines(){
        let data = [
            { _id: 0, name: "Abbott Architect i1000" },
            { _id: 1, name: "Abbott Architect i2000SR" },
            { _id: 2, name: "Abbott Architect ci4100" },
            { _id: 3, name: "Abbott AxSYM" },
            { _id: 4, name: "Semi-Automated" },
            { _id: 5, name: "Bio-Rad Model 680 Microplate Reader" },
            { _id: 6, name: "Bio-Rad CODA" },
            { _id: 7, name: "Bio-Rad EVOLIS" },
            { _id: 8, name: "bioMerieux VIDAS" },
            { _id: 9, name: "bioMerieux mini VIDAS" },
            { _id: 10, name: "DiaSorin ETI-Max 3000" },
            { _id: 11, name: "Grifols Procleic Tigris System" },
            { _id: 12, name: "Roche cobas s201" },
            { _id: 13, name: "Ortho VITROS ECi" },
            { _id: 14, name: "Ortho VITROS ECiQ" },
            { _id: 15, name: "Ortho VITROS 3600" },
            { _id: 16, name: "Ortho VITROS 5600" },
            { _id: 17, name: "Roche cobas e411" },
            { _id: 18, name: "Roche Elecsys 2010" },
            { _id: 19, name: "Siemens ADVIA Centaur" },
            { _id: 20, name: "Siemens ADVIA Centaur XP" },
            { _id: 21, name: "Snibe Maglumi 600" },
            { _id: 22, name: "Snibe Maglumi 800" },
            { _id: 23, name: "Snibe Maglumi 1000" },
            { _id: 24, name: "Snibe Maglumi 1000 Plus" },
            { _id: 25, name: "Snibe Maglumi 2000" },
            { _id: 26, name: "Snibe Maglumi 2000 Plus" },
            { _id: 27, name: "Snibe Maglumi 4000" },
            { _id: 28, name: "Snibe Maglumi 4000 Plus" },
            { _id: 29, name: "Snibe Biolumi 8000" },
            { _id: 30, name: "Sysmex HISCL-800" },
            { _id: 31, name: "Sysmex HISCL-5000" }
        ]

        this.seed(data,Machine)
    }

    static reagents(){
        let data = [
            { _id: 0, name: "Abbott ARCHITECT Anti-HCV" },
            { _id: 1, name: "Abbott ARCHITECT HBsAg Qualitative" },
            { _id: 2, name: "Abbott ARCHITECT HIV Ag/Ab Combo" },
            { _id: 3, name: "Abbott ARCHITECT Syphilis TP" },
            { _id: 4, name: "Abbott AxSYM HIV Ag/Ab Combo" },
            { _id: 5, name: "Alere Alere Determine™ HIV-1/2" },
            { _id: 6, name: "bioMerieux Hepanostika® HBsAg ULTRA" },
            { _id: 7, name: "bioMerieux Vidas HIV DUO Ultra" },
            { _id: 8, name: "bioMerieux VIDAS® Anti-HCV (HCV)" },
            { _id: 9, name: "bioMerieux VIDAS® HBsAg Ultra" },
            { _id: 10, name: "bioMerieux Vironostika® HIV Ag/Ab" },
            { _id: 11, name: "BIO-RAD Genscreen™ ULTRA HIV Ag-Ab" },
            { _id: 12, name: "BIO-RAD Monolisa™ HBs Ag ULTRA" },
            { _id: 13, name: "BIO-RAD Monolisa™ HCV Ag-Ab ULTRA" },
            { _id: 14, name: "BIO-RAD Microlisa Malaria" },
            { _id: 15, name: "Cellabs Pan Malaria Antibody CELISA" },
            { _id: 16, name: "DiaSorin Murex anti-HCV Version 4.0" },
            { _id: 17, name: "DiaSorin Murex HBsAg Version 3" },
            { _id: 18, name: "DiaSorin Murex HCV Ag/Ab Combination" },
            { _id: 19, name: "DiaSorin Murex HIV Ag/Ab Combination" },
            { _id: 20, name: "Grifols Procleix® Ultrio Plus® Assay" },
            { _id: 21, name: "Intec Advanced® Anti-HCV ELISA" },
            { _id: 22, name: "Intec Advanced® HBsAg ELISA" },
            { _id: 23, name: "Intec Advanced® HIV (1&2) ELISA" },
            { _id: 24, name: "Malaria Pf/Pan Rapid Test Device" },
            { _id: 25, name: "Ortho Vitros Anti-HCV" },
            { _id: 26, name: "Ortho VITROS Anti-HIV 1+2" },
            { _id: 27, name: "Ortho Vitros HBsAg" },
            { _id: 28, name: "Phoenix Bio-Tech TREP-SURE™ EIA" },
            { _id: 29, name: "Roche Anti-HCV II" },
            { _id: 30, name: "Roche cobas® TaqScreen MPX Test, version 2.0" },
            { _id: 31, name: "Roche HBsAg II" },
            { _id: 32, name: "Roche HIV combi PT" },
            { _id: 33, name: "Siemens ADVIA Centaur Anti-HCV IgG" },
            { _id: 34, name: "Siemens ADVIA Centaur HBsAg" },
            { _id: 35, name: "Siemens ADVIA Centaur HIV 1/O/2 Enhanced (EHIV)" },
            { _id: 36, name: "Siemens ADVIA Centaur HIV Ag/Ab Combo (CHIV)" },
            { _id: 37, name: "SNIBE MAGLUMI HIV Ab/Ag Combi (CLIA)" },
            { _id: 38, name: "Standard Diagnostics SD Bioline HIV 1/2" },
            { _id: 39, name: "Sysmex HISCL® Anti-HCV Assay Kit" },
            { _id: 40, name: "Sysmex HISCL® HBsAg Assay Kit" },
            { _id: 41, name: "Sysmex HISCL® HIV Ag+Ab Assay Kit" },
            { _id: 42, name: "Parahit Total Device" },
            { _id: 43, name: "Parascreen Device for Malaria" }
        ]

        this.seed(data,Reagent)
    }

    static kitMethods(){
        let data = [
            { _id: 0, name: 'Particle Agglutination' },
            { _id: 1, name: 'Neutralization Test' },
            { _id: 2, name: 'Polymerase Chain Reaction' },
            { _id: 3, name: 'Enzyme Immunoassay' },
            { _id: 4, name: 'Chemilluminescence' },
            { _id: 5, name: 'Rapid Plasma Reagin' },
            { _id: 6, name: 'Antigen Test' },
            { _id: 7, name: 'Western Blot' },
            { _id: 8, name: 'Immunochromatographic Assay (Supplemental)' }
        ]

        this.seed(data,KitMethod)
    }

    static resultOptions(){
        let data = [
            { _id: 0, name: "NEGATIVE" },
            { _id: 1, name: "INDETERMINATE (gp120, p24)" },
            { _id: 2, name: "INDETERMINATE (gp160, p24, p17)" },
            { _id: 3, name: "INDETERMINATE (gp160, p66, p24)" },
            { _id: 4, name: "INDETERMINATE (gp160)" },
            { _id: 5, name: "INDETERMINATE (p66, p51)" },
            { _id: 6, name: "INDETERMINATE (p66)" },
            { _id: 7, name: "INDETERMINATE (p24)" },
            { _id: 8, name: "INDETERMINATE (p17)" },
            { _id: 9, name: "INDETERMINATE (p55)" },
            { _id: 10, name: "p24 Ag REACTIVE / NEGATIVE for HIV Ab" },
            { _id: 11, name: "POSITIVE" },
            { _id: 12, name: "POSITIVE (HIV-1)" },
            { _id: 13, name: "POSITIVE (HIV-1) with cross-reaction to (HIV-2)" },
            { _id: 14, name: "GROSSLY HEMOLYZED" },
            { _id: 15, name: "NO SAMPLE" },
            { _id: 16, name: "DISCREPANT" },
            { _id: 17, name: "UNSUITABLE FOR TESTING" },
            { _id: 18, name: "LEAKED" },
            { _id: 19, name: "SPILLED" },
            { _id: 20, name: "QUANTITY NOT SUFFICIENT" },
            { _id: 21, name: "NO MALARIA PARASITE SEEN" },
            { _id: 22, name: "INDETERMINATE (NS3-1)" },
            { _id: 23, name: "INDETERMINATE (NS3-2)" },
            { _id: 24, name: "INDETERMINATE (CORE)" },
            { _id: 25, name: "INDETERMINATE (NS4)" },
            { _id: 26, name: "INDETERMINATE (NS5) " },
            { _id: 27, name: "PENDING" },
            { _id: 28, name: "ABOVE CUT-OFF" },
            { _id: 29, name: "INDETERMINATE (CORE)" },
            { _id: 30, name: "HIV-RNA DETECTED" },
            { _id: 31, name: "HBV-DNA DETECTED" },
            { _id: 32, name: "HBV-DNA DETECTED, ANTIBODY NON-REACTIVE" },
            { _id: 33, name: "HCV-RNA DETECTED" },
            { _id: 34, name: "HIV-RNA HBV-RNA HCV-RNA DETECTED" },
            { _id: 35, name: "HIV-RNA HBV-RNA DETECTED" },
            { _id: 36, name: "HIV-RNA HCV-RNA DETECTED" },
            { _id: 37, name: "HBV-DNA HCV-RNA DETECTED" },
            { _id: 38, name: "HIV-RNA NOT DETECTED" },
            { _id: 39, name: "HBV-DNA NOT DETECTED" },
            { _id: 40, name: "HCV-RNA NOT DETECTED-" },
            { _id: 41, name: "NEGATIVE TO ALL PLASMODIUM SPP." },
            { _id: 42, name: "REJECTED" },
        ]

        this.seed(data,ResultOption)
    }

    static particleAgglutinations(){
        let data = [
            { _id: 0, name: "Non-Reactive" },
            { _id: 1, name: "Inconclusive" },
            { _id: 2, name: "+" },
            { _id: 3, name: "++" },
            { _id: 4, name: "+++" },
            { _id: 5, name: "++++" },
            { _id: 6, name: "Non-Reactive (after Absorption)" },
            { _id: 7, name: "Inconclusive (after Absorption)" },
            { _id: 8, name: "+ (after Absorption)" },
            { _id: 9, name: "++ (after Absorption)" },
            { _id: 10, name: "+++ (after Absorption)" },
            { _id: 11, name: "++++ (after Absorption)" },
        ]

        this.seed(data,ParticleAgglutination)
    }

    static serodiaHivInterpretations(){
        let data = [
            { _id: 0, name: "Non-Reactive" },
            { _id: 1, name: "Non-Reactive (after Absorption)" },
            { _id: 2, name: "Inconclusive (HIV-1)" },
            { _id: 3, name: "Inconclusive (HIV-2)" },
            { _id: 4, name: "Inconclusive (HIV-1 and HIV-2)" },
            { _id: 5, name: "Inconclusive (HIV-1) after Absorption" },
            { _id: 6, name: "Inconclusive (HIV-2) after Absorption" },
            { _id: 7, name: "Inconclusive (HIV-1 and HIV-2) after Absorption" },
            { _id: 8, name: "Inconclusive (HIV-1) and Reactive (HIV-2)" },
            { _id: 9, name: "Reactive (HIV-1)" },
            { _id: 10, name: "Reactive (HIV-2)" },
            { _id: 11, name: "Reactive (HIV-1 and HIV-2)" },
            { _id: 12, name: "Reactive (HIV-1) and Inconclusive (HIV-2)" },
            { _id: 13, name: "Reactive (HIV-1) after Absorption" },
            { _id: 14, name: "Reactive (HIV-2) after Absorption" },
            { _id: 15, name: "Reactive (HIV-1 and HIV-2) after Absorption" },
        ]

        this.seed(data,SerodiaHivInterpretation)
    }

    static eiaResults(){
        let data = [
            {_id : 0, name : "Non-Reactive"},
            {_id : 1, name : "Reactive"},
            {_id : 2, name : "Non-Reactive Grayzone"},
            {_id : 3, name : "Reactive Grayzone"},
        ]

        this.seed(data,EiaResult)
    }

    static westernBlootHiv(){
        let data = [
            {_id:0,name:"POSITIVE (HIV-1)"},
            {_id:1,name:"POSITIVE (HIV-1) with cross-reaction to (HIV-2)"},
            {_id:2,name:"INDETERMINATE (gp120, p24)"},
            {_id:3,name:"INDETERMINATE (gp160, p24)"},
            {_id:4,name:"INDETERMINATE (gp160, p17)"},
            {_id:5,name:"INDETERMINATE (gp160, p24, p17)"},
            {_id:6,name:"INDETERMINATE (gp160, p66, p24)"},
            {_id:7,name:"INDETERMINATE (gp160)"},
            {_id:8,name:"INDETERMINATE (p51)"},
            {_id:9,name:"INDETERMINATE (p66, p51)"},
            {_id:10,name:"INDETERMINATE (p66)"},
            {_id:11,name:"INDETERMINATE (p24)"},
            {_id:12,name:"INDETERMINATE (p55)"},
            {_id:13,name:"INDETERMINATE (p17)"},
            {_id:14,name:"NEGATIVE"}
        ]
        
        this.seed(data,WesternBlootHiv)
    }

    static pcrResults(){
        let data = [
            {_id:0,name:"HIV-RNA DETECTED"},
            {_id:1,name:"HBV-DNA DETECTED"},
            {_id:2,name:"HCV-RNA DETECTED"},
            {_id:3,name:"HIV-RNA HBV-RNA HCV-RNA DETECTED"},
            {_id:4,name:"HIV-RNA HBV-RNA DETECTED"},
            {_id:5,name:"HIV-RNA HCV-RNA DETECTED"},
            {_id:6,name:"HBV-DNA HCV-RNA DETECTED"},
            {_id:7,name:"HIV-RNA NOT DETECTED"},
            {_id:8,name:"HBV-DNA NOT DETECTED"},
            {_id:9,name:"HCV-RNA NOT DETECTED"},
        ]

        this.seed(data,PcrResult)
    }

    static geeniusHivInterpretation(){
        let data = [
            {_id : 0, name : 'POSITIVE (HIV-1)'},
            {_id : 1, name : 'NEGATIVE'},
        ]

        this.seed(data,GeeniusHivInterpretation)
    }

    static rejectReasons(){
        let data = [
            {_id:0,name:"No Sample"},
            {_id:1,name:"Grossly Hemolyzed"},
            {_id:2,name:"Leakage"},
            {_id:3,name:"QNS"},
            {_id:4,name:"Spilled"},
            {_id:4,name:"Unsuitable for Testing"},
        ]

        this.seed(data,RejectReason)
    }

    static seed(data,model,filter){
        data.forEach(record=>{
            var d = new model(record)

            model.findOneAndUpdate(
                filter || {_id : d._id},
                d,
                {
                    upsert : true, new : true, useFindAndModify : false
                },
                (err,doc) => {
                    if(err){
                        console.log(err)
                    }
                }
            )
        })
    }
}

module.exports = ReferenceSeeder