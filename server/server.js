const port = process.env.PORT || 3000;

const express = require('express');
const cors = require('cors');
const mongooes = require('mongoose');
const bodyParser = require('body-parser');

const DB_HOST = "localhost"
const DB_PORT = 30000
const DB_USER = "root"
const DB_PASS = "d0hn88n37s"
const DB_NAME = "cts"
const DB_AUTHDB = "admin"
const DB_REPL_SET = null

const app = express();

let con = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`

if (DB_REPL_SET) {
    con += `?replicaSet=${DB_REPL_SET}`
}

const db = mongooes.connect(con, {
    user : DB_USER,
    pass : DB_PASS,
    auth: {
        authdb: DB_AUTHDB
    },
    useUnifiedTopology: true
})


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

app.use(cors());

var swaggerUi = require('swagger-ui-express'),
    swaggerJSDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition : {
        "swagger": "2.0",
        "info": {
            "version": "1.0.0",
            "title": "NBBNETS - CTS API",
            "description": "API for NBBNETS - Confirmatory Testing System",
            "license": {
            "name": "DOH",
            "url": "https://opensource.org/licenses/MIT"
            }
        },
        "host": "10.100.100.12:3000",
        "schemes": [
            "http"
        ],
        "consumes": [
            "application/json"
        ]
    },
    apis : ['./routes/*Routes.js']
}

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, false, {docExpansion : "none"}));

const referenceRoutes = require("./routes/referenceRoutes");
app.use('/',referenceRoutes);
const userRoutes = require("./routes/userRoutes");
app.use('/users', userRoutes);
const donationRoutes = require("./routes/donationRoutes");
app.use('/donations', donationRoutes);
const referralRoutes = require("./routes/referralRoutes");
app.use('/referrals',referralRoutes);
const seederRoutes = require("./routes/seederRoutes");
app.use('/seed',seederRoutes);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});