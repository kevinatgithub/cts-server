const TestProtocol = require("../models/TestProtocol")

class TestProtocolSeeder{

    static run(){
        let data = [
            {
                "tti": "HIV",
                "name": "FUJIREBIO DIAGNOSTICS, INC. SERODIA HIV 1/2",
                "fields": [
                    {
                        "id": 0,
                        "name": "PA FINAL STATUS",
                        "type": "select",
                        "source": "SERODIA HIV INTERPRETATION"
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "SERODIA HIV 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "SERODIA HIV 1 - 1",
                                "type": "select",
                                "source": "PARTICLE AGGLUTINATION"
                            },
                            {
                                "id": 1,
                                "name": "SERODIA HIV 1 - 2",
                                "type": "select",
                                "source": "PARTICLE AGGLUTINATION"
                            },
                            {
                                "id": 2,
                                "name": "SERODIA HIV 1/2 INT 1",
                                "type": "select",
                                "source": "SERODIA HIV INTERPRETATION"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "SERODIA HIV REMARKS 1",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "SERODIA HIV 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "SERODIA HIV 2 - 1",
                                "type": "select",
                                "source": "PARTICLE AGGLUTINATION"
                            },
                            {
                                "id": 1,
                                "name": "SERODIA HIV 2 - 2",
                                "type": "select",
                                "source": "PARTICLE AGGLUTINATION"
                            },
                            {
                                "id": 2,
                                "name": "SERODIA HIV 1/2 INT 2",
                                "type": "select",
                                "source": "SERODIA HIV INTERPRETATION"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "SERODIA HIV REMARKS 2",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "ABSORPTION",
                        "fields": [
                            {
                                "id": 0,
                                "name": "SERODIA HIV 1 - ABS",
                                "type": "select",
                                "source": "PARTICLE AGGLUTINATION"
                            },
                            {
                                "id": 1,
                                "name": "SERODIA HIV 2 - ABS",
                                "type": "select",
                                "source": "PARTICLE AGGLUTINATION"
                            },
                            {
                                "id": 2,
                                "name": "SERODIA HIV 1/2 INT ABS",
                                "type": "select",
                                "source": "SERODIA HIV INTERPRETATION"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED ABS",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "SERODIA HIV REMARKS ABS",
                                "type": "text"
                            }
                        ]
                    }
                ]
            },
            {
                "tti": "HIV",
                "name": "ABBOTT ARCHITECT HIV Ag/Ab i2000 SR",
                "fields": [
                    {
                        "id": 0,
                        "name": "ARCHITECT FINAL STATUS",
                        "type": "select",
                        "source": "EIA RESULTS"
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "ARCHITECT 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "ARCHITECT S/CO 1",
                                "type": "text"
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 1",
                                "type": "text"
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "REMARKS 1",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "ARCHITECT 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "ARCHITECT S/CO 2",
                                "type": "text"
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 2",
                                "type": "text"
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "REMARKS 2",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "ARCHITECT 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "ARCHITECT S/CO 3",
                                "type": "text"
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 3",
                                "type": "text"
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 3",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "REMARKS 3",
                                "type": "text"
                            }
                        ]
                    }
                ]
            },
            {
                "tti": "HIV",
                "name": "BIORAD GENSCREEN ULTRA HIV Ag/Ab",
                "fields": [
                    {
                        "id": 0,
                        "name": "GENSCREEN FINAL STATUS",
                        "type": "select",
                        "source": "EIA RESULTS"
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "GENSCREEN 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 1",
                                "type": "text"
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 1",
                                "type": "text"
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "REMARKS 1",
                                "type": "text"
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "GENSCREEN 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 2",
                                "type": "text"
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 2",
                                "type": "text"
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date"
                            },
                            {
                                "id": 4,
                                "name": "REMARKS 2",
                                "type": "text"
                            }
                        ]
                    }
                ]
            },
            {
                "tti": "HIV",
                "name": "BIORAD GEENIUS",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "GEENIUS HIV INTERPRETATION"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date"
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text"
                    }
                ]
            },
            {
                "tti": "HIV",
                "name": "ROCHE TAQSCREEN",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "PCR RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date"
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text"
                    }
                ]
            },
            {
                "tti": "HIV",
                "name": "MP BLOT HIV 2.0",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "WESTERNBLOT HIV"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date"
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text"
                    }
                ]
            },
            {
                "tti": "HIV",
                "name": "QIAGEN ARTUS HIV-1",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "PCR RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date"
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text"
                    }
                ]
            },
            {
                "tti": "HBV",
                "name": "BIORAD MONOLISA HBSAG QUALI",
                "fields": [
                    {
                        "id": 0,
                        "name": "MONOLISA FINAL INTERPRETATION",
                        "type": "select",
                        "source": "EIA RESULTS"
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "MONOLISA 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "MONOLISA 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "MONOLISA 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            },
            {
                "tti": "HBV",
                "name": "DIASORIN MUREX HBSAG QUALI",
                "fields": [
                    {
                        "id": 0,
                        "name": "MUREX FINAL INTERPRETATION",
                        "type": "select",
                        "source": "EIA RESULTS"
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "MUREX 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "MUREX 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "MUREX 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            },
            {
                "tti": "HBV",
                "name": "ABBOTT ARCHITECT HBSAG QUALI",
                "fields": [
                    {
                        "id": 0,
                        "name": "ARCHITECT FINAL INTERPRETATION",
                        "type": "select",
                        "source": "EIA RESULTS"
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "ARCHITECT 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "S/CO 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            },
                            {
                                "id": 3,
                                "name": "REMARKS 1",
                                "type": "text",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "ARCHITECT 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "S/CO 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            },
                            {
                                "id": 3,
                                "name": "REMARKS 2",
                                "type": "text",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "ARCHITECT 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "S/CO 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            },
                            {
                                "id": 3,
                                "name": "REMARKS 3",
                                "type": "text",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            },
            {
                "tti": "HBV",
                "name": "ROCHE TAQSCREEN",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "PCR RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": false
            },
            {
                "tti": "HBV",
                "name": "QIAGEN ARTUS HBV",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "PCR RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": false
            },
            {
                "tti": "HBV",
                "name": "BIORAD MONOLISA HBSAG NT",
                "fields": [
                    {
                        "id": 0,
                        "name": "UNDILUTED",
                        "type": "select",
                        "source": "EIA NT RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 2,
                        "name": "1:10",
                        "type": "select",
                        "source": "EIA NT RESULTS"
                    },
                    {
                        "id": 3,
                        "name": "1:10 DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 4,
                        "name": "1:100",
                        "type": "select",
                        "source": "EIA NT RESULTS"
                    },
                    {
                        "id": 5,
                        "name": "1:100 DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 6,
                        "name": "1:1000",
                        "type": "select",
                        "source": "EIA NT RESULTS"
                    },
                    {
                        "id": 7,
                        "name": "1:1000 DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 8,
                        "name": "1:10000",
                        "type": "select",
                        "source": "EIA NT RESULTS"
                    },
                    {
                        "id": 9,
                        "name": "1:10000 DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 10,
                        "name": "MONO NT FINAL STATUS",
                        "type": "select",
                        "source": "EIA NT RESULTS"
                    }
                ],
                "forms": []
            },
            {
                "tti": "HCV",
                "name": "ABBOTT ARCHITECT ANTI-HCV",
                "fields": [
                    {
                        "id": 0,
                        "name": "FINAL INTERPRETATION",
                        "type": "select",
                        "source": "EIA RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "ARCHITECT 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "RESULT 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "ARCHITECT 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "RESULT 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "ARCHITECT 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "RESULT 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            },
            {
                "tti": "HCV",
                "name": "BIO-RAD MONOLISA HCV ULTRA",
                "fields": [
                    {
                        "id": 0,
                        "name": "FINAL INTERPRETATION",
                        "type": "select",
                        "source": "EIA RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "MONOLISA 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "MONOLISA 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "MONOLISA 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "REMARKS 3",
                                "type": "text",
                                "source": null
                            }
                        ]
                    }
                ]
            },
            {
                "tti": "HCV",
                "name": "MP BIOMEDICALS HCV BLOT 3.0",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "HCV BLOT INTERPRETATIONS"
                    },
                    {
                        "id": 1,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    },
                    {
                        "id": 2,
                        "name": "DATE TESTED",
                        "type": "date",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": false
            },
            {
                "tti": "HCV",
                "name": "ROCHE TAQSCREEN",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "PCR RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": false
            },
            {
                "tti": "HCV",
                "name": "QIAGEN ARTUS HCV",
                "fields": [
                    {
                        "id": 0,
                        "name": "INTERPRETATION",
                        "type": "select",
                        "source": "PCR RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE TESTED",
                        "type": "date",
                        "source": null
                    },
                    {
                        "id": 2,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": false
            },
            {
                "tti": "MAL",
                "name": "MALARIA MICROSCOPY RESULT",
                "fields": [
                    {
                        "id": 0,
                        "name": "RESULT",
                        "type": "select",
                        "source": "MALARIA RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE REPORTED",
                        "type": "date",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": false
            },
            {
                "tti": "MAL",
                "name": "MALARIA PCR RESULT",
                "fields": [
                    {
                        "id": 0,
                        "name": "RESULT",
                        "type": "select",
                        "source": "MALARIA RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "DATE REPORTED",
                        "type": "date",
                        "source": null
                    }
                ],
                "forms": [],
                "_showDetails": true
            },
            {
                "tti": "SYP",
                "name": "STERLING DIAGNOSTICS INC. RPR CARD TEST",
                "fields": [
                    {
                        "id": 0,
                        "name": "FINAL INTERPRETATION",
                        "type": "select",
                        "source": "SYPHILIS RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "RESULT 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "RESULT 1",
                                "type": "select",
                                "source": "STERLING RPR RESULTS"
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "SYPHILIS RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "RESULT 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "RESULT 2",
                                "type": "select",
                                "source": "STERLING RPR RESULTS"
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "SYPHILIS RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "RESULT 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "RESULT 3",
                                "type": "select",
                                "source": "STERLING RPR RESULTS"
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "SYPHILIS RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            },
            {
                "tti": "SYP",
                "name": "PHOENIX BIOTECH TREP-SURE",
                "fields": [
                    {
                        "id": 0,
                        "name": "FINAL EIA INTERPRETATION",
                        "type": "select",
                        "source": "SYPHILIS RESULT"
                    },
                    {
                        "id": 1,
                        "name": "REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "EIA 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "CUT-OFF VALUE 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "OPTICAL DENSITY 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "EIA 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "EIA 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "OPTICAL DENSITY 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "CUT-OFF VALUE 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 2,
                                "name": "INTERPERTATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 3,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            },
            {
                "tti": "SYP",
                "name": "ABBOTT ARCHITECT SYPHILIS TP",
                "fields": [
                    {
                        "id": 0,
                        "name": "FINAL SYPHILIS TP INTERPRETATION",
                        "type": "select",
                        "source": "EIA RESULTS"
                    },
                    {
                        "id": 1,
                        "name": "SYPHILIS TP REMARKS",
                        "type": "text",
                        "source": null
                    }
                ],
                "forms": [
                    {
                        "id": 0,
                        "name": "SYPHILIS TP 1",
                        "fields": [
                            {
                                "id": 0,
                                "name": "S/CO 1",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 1",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 1",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 1,
                        "name": "SYPHILIS TP 2",
                        "fields": [
                            {
                                "id": 0,
                                "name": "S/CO 2",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 2",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 2",
                                "type": "date",
                                "source": null
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "name": "SYPHILIS TP 3",
                        "fields": [
                            {
                                "id": 0,
                                "name": "S/CO 3",
                                "type": "text",
                                "source": null
                            },
                            {
                                "id": 1,
                                "name": "INTERPRETATION 3",
                                "type": "select",
                                "source": "EIA RESULTS"
                            },
                            {
                                "id": 2,
                                "name": "DATE TESTED 3",
                                "type": "date",
                                "source": null
                            }
                        ]
                    }
                ],
                "_showDetails": false
            }
        ]
        
        this.seed(data,TestProtocol)
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

module.exports = TestProtocolSeeder