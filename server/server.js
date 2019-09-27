const port = process.env.PORT || 3000;
const express = require('express');
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
    }
})


app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

const userRoutes = require("./routes/userRoutes");
app.use('/users', userRoutes);

app.listen(port, () => {
    console.log(`listening on ${port}`);
});