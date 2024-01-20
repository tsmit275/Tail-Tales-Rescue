const { exec } = require('child_process');

exec('npx sequelize-cli db:seed:all', (error, stdout, stderr) => {
    if (error){
        console.error('Error executing seeder: ${error}');
        return;
    }
    console.log(stdout);
    console.error(stderr);
});

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes')
const path = require('path');

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./models");
db.sequelize.sync({force: true}).then(() => {
    const corsOptions = {
        origin: `http://localhost:3000`,
    }

    app.use(cors(corsOptions));

    app.use(express.static(path.join(__dirname,'../frontend/build')));

    // parse requests of content-type - application/json
    app.use(bodyParser.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(routes);

    app.get('*',(req, res) => {
        res.sendFile(path.join(__dirname, '../client/build/index.html'));
    })

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
    });
});

/*
frontend
    HTML, CSS, JS
        Vanilla
        React, Vue, Angular, Svelte, Knockout, Jquery......

        Scss 

Backend
    C#, Javascript, Python, Ruby, VB, PHP, Rust, Java, ......
    ORM - OBJECT RELATIONAL MAPPER
DB
    Mysql, MariaDb, Oracle, MSSQL, Postgres, Mongo, Elastic, Firebase....

Deployment

if () {

}

if () ---if the code for the if is one line

if (a ==1){
    console.log('hello')
}

if (a ==1) console.log('hello');


    
    

*/