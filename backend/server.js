const express = require("express");
const bodyParser = require("body-parser");
const routes = require('./routes')
const cors = require("cors");

const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./models");
const {syncDb} = require("./dbhelpers/syncdb");


db.sequelize.sync({force: true}).then(async () => {
    //re-seed db
    await syncDb();

    const corsOptions = {
        origin: ["http://tailsfrontend.onrender.com","https://tailsfrontend.onrender.com", "http://localhost:3000","https://localhost:3000"]
    };

    app.use(cors(corsOptions));

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(routes);

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});
