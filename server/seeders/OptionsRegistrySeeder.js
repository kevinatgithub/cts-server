const OptionsRegistry = require("../models/OptionsRegistry")

class OptionsRegistrySeeder{

    static run(){
        let data = [
            {
                "_id": 0,
                "category": "PCR RESULTS",
                "name": "HIV-RNA DETECTED"
            },
            {
                "_id": 1,
                "category": "PCR RESULTS",
                "name": "HBV-DNA DETECTED"
            },
            {
                "_id": 2,
                "category": "PCR RESULTS",
                "name": "HCV-RNA DETECTED"
            },
            {
                "_id": 3,
                "category": "PCR RESULTS",
                "name": "HIV-RNA HBV-RNA HCV-RNA DETECTED"
            },
            {
                "_id": 4,
                "category": "PCR RESULTS",
                "name": "HIV-RNA HBV-RNA DETECTED"
            },
            {
                "_id": 5,
                "category": "PCR RESULTS",
                "name": "HIV-RNA HCV-RNA DETECTED"
            },
            {
                "_id": 6,
                "category": "PCR RESULTS",
                "name": "HBV-DNA HCV-RNA DETECTED"
            },
            {
                "_id": 7,
                "category": "PCR RESULTS",
                "name": "HIV-RNA NOT DETECTED"
            },
            {
                "_id": 8,
                "category": "PCR RESULTS",
                "name": "HBV-DNA NOT DETECTED"
            },
            {
                "_id": 9,
                "category": "PCR RESULTS",
                "name": "HCV-RNA NOT DETECTED"
            },
            {
                "_id": 10,
                "category": "GEENIUS HIV INTERPRETATION",
                "name": "POSITIVE (HIV-1)"
            },
            {
                "_id": 11,
                "category": "GEENIUS HIV INTERPRETATION",
                "name": "NEGATIVE"
            },
            {
                "_id": 12,
                "category": "WESTERNBLOT HIV",
                "name": "POSITIVE (HIV-1)"
            },
            {
                "_id": 13,
                "category": "WESTERNBLOT HIV",
                "name": "POSITIVE (HIV-1) with cross-reaction to (HIV-2)"
            },
            {
                "_id": 14,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (gp120, p24)"
            },
            {
                "_id": 15,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (gp160, p24)"
            },
            {
                "_id": 16,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (gp160, p17)"
            },
            {
                "_id": 17,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (gp160, p24, p17)"
            },
            {
                "_id": 18,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (gp160, p66, p24)"
            },
            {
                "_id": 19,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (gp160)"
            },
            {
                "_id": 20,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (p51)"
            },
            {
                "_id": 21,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (p66, p51)"
            },
            {
                "_id": 22,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (p66)"
            },
            {
                "_id": 23,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (p24)"
            },
            {
                "_id": 24,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (p55)"
            },
            {
                "_id": 25,
                "category": "WESTERNBLOT HIV",
                "name": "INDETERMINATE (p17)"
            },
            {
                "_id": 26,
                "category": "WESTERNBLOT HIV",
                "name": "NEGATIVE"
            },
            {
                "_id": 27,
                "category": "EIA RESULTS",
                "name": "Non-Reactive"
            },
            {
                "_id": 28,
                "category": "EIA RESULTS",
                "name": "Reactive"
            },
            {
                "_id": 29,
                "category": "EIA RESULTS",
                "name": "Non-Reactive Grayzone"
            },
            {
                "_id": 30,
                "category": "EIA RESULTS",
                "name": "Reactive Grayzone"
            },
            {
                "_id": 31,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Non-Reactive"
            },
            {
                "_id": 32,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Non-Reactive (after Absorption)"
            },
            {
                "_id": 33,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-1)"
            },
            {
                "_id": 34,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-2)"
            },
            {
                "_id": 35,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-1 and HIV-2)"
            },
            {
                "_id": 36,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-1) after Absorption"
            },
            {
                "_id": 37,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-2) after Absorption"
            },
            {
                "_id": 38,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-1 and HIV-2) after Absorption"
            },
            {
                "_id": 39,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Inconclusive (HIV-1) and Reactive (HIV-2)"
            },
            {
                "_id": 40,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-1)"
            },
            {
                "_id": 41,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-2)"
            },
            {
                "_id": 42,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-1 and HIV-2)"
            },
            {
                "_id": 43,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-1) and Inconclusive (HIV-2)"
            },
            {
                "_id": 44,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-1) after Absorption"
            },
            {
                "_id": 45,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-2) after Absorption"
            },
            {
                "_id": 46,
                "category": "SERODIA HIV INTERPRETATION",
                "name": "Reactive (HIV-1 and HIV-2) after Absorption"
            },
            {
                "_id": 47,
                "category": "PARTICLE AGGLUTINATION",
                "name": "Non-Reactive"
            },
            {
                "_id": 48,
                "category": "PARTICLE AGGLUTINATION",
                "name": "Inconclusive"
            },
            {
                "_id": 49,
                "category": "PARTICLE AGGLUTINATION",
                "name": "+"
            },
            {
                "_id": 50,
                "category": "PARTICLE AGGLUTINATION",
                "name": "++"
            },
            {
                "_id": 51,
                "category": "PARTICLE AGGLUTINATION",
                "name": "+++"
            },
            {
                "_id": 52,
                "category": "PARTICLE AGGLUTINATION",
                "name": "++++"
            },
            {
                "_id": 53,
                "category": "PARTICLE AGGLUTINATION",
                "name": "Non-Reactive (after Absorption)"
            },
            {
                "_id": 54,
                "category": "PARTICLE AGGLUTINATION",
                "name": "Inconclusive (after Absorption)"
            },
            {
                "_id": 55,
                "category": "PARTICLE AGGLUTINATION",
                "name": "+ (after Absorption)"
            },
            {
                "_id": 56,
                "category": "PARTICLE AGGLUTINATION",
                "name": "++ (after Absorption)"
            },
            {
                "_id": 57,
                "category": "PARTICLE AGGLUTINATION",
                "name": "+++ (after Absorption)"
            },
            {
                "_id": 58,
                "category": "PARTICLE AGGLUTINATION",
                "name": "++++ (after Absorption)"
            },
            {
                "_id": 59,
                "category": "EIA NT RESULTS",
                "name": "To Be Diluted"
            },
            {
                "_id": 60,
                "category": "EIA NT RESULTS",
                "name": "Negative"
            },
            {
                "_id": 61,
                "category": "EIA NT RESULTS",
                "name": "Positive"
            },
            {
                "_id": 62,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "Positive"
            },
            {
                "_id": 63,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "INDETERMINATE (NS3-1)"
            },
            {
                "_id": 64,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "INDETERMINATE (NS3-2)"
            },
            {
                "_id": 65,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "INDETERMINATE (NS4)"
            },
            {
                "_id": 66,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "INDETERMINATE (NS5)"
            },
            {
                "_id": 67,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "INDETERMINATE (GST)"
            },
            {
                "_id": 68,
                "category": "HCV BLOT INTERPRETATIONS",
                "name": "INDETERMINATE (CORE)"
            },
            {
                "_id": 69,
                "category": "MALARIA RESULTS",
                "name": "NO MALARIAL PARASITE SEEN"
            },
            {
                "_id": 70,
                "category": "MALARIA RESULTS",
                "name": "Positive (P. falciparum)"
            },
            {
                "_id": 71,
                "category": "MALARIA RESULTS",
                "name": "Positive (Plasmodium sp.)"
            },
            {
                "_id": 72,
                "category": "MALARIA RESULTS",
                "name": "Positive (P. ovale)"
            },
            {
                "_id": 73,
                "category": "MALARIA RESULTS",
                "name": "Positive (P. knowlesi)"
            },
            {
                "_id": 74,
                "category": "MALARIA RESULTS",
                "name": "Positive (P. malariae)"
            },
            {
                "_id": 75,
                "category": "MALARIA RESULTS",
                "name": "UNSUITABLE FOR TESTING"
            },
            {
                "_id": 75,
                "category": "MALARIA RESULTS",
                "name": "Negative for all Plasmodium spp."
            },
            {
                "_id": 76,
                "category": "STERLING RPR RESULTS",
                "name": "NON-REACTIVE"
            },
            {
                "_id": 78,
                "category": "STERLING RPR RESULTS",
                "name": "INCONCLUSIVE"
            },
            {
                "_id": 79,
                "category": "STERLING RPR RESULTS",
                "name": "+"
            },
            {
                "_id": 80,
                "category": "STERLING RPR RESULTS",
                "name": "++"
            },
            {
                "_id": 81,
                "category": "STERLING RPR RESULTS",
                "name": "+++"
            },
            {
                "_id": 82,
                "category": "STERLING RPR RESULTS",
                "name": "++++"
            },
            {
                "_id": 83,
                "category": "SYPHILIS RESULTS",
                "name": "NON-REACTIVE"
            },
            {
                "_id": 84,
                "category": "SYPHILIS RESULTS",
                "name": "INCONCLUSIVE"
            },
            {
                "_id": 85,
                "category": "SYPHILIS RESULTS",
                "name": "REACTIVE"
            }
        ]
        this.seed(data,OptionsRegistry)
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

module.exports = OptionsRegistrySeeder