const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require('./routes')


const PORT = process.env.PORT || 3001;

const app = express();

const db = require("./models");
db.sequelize.sync({ force: true}).then(() => {
    const corsOptions = {
        origin: `http://localhost:${PORT}`,
    }

    app.use(cors(corsOptions));

    // parse requests of content-type - application/json
    app.use(bodyParser.json());

    // parse requests of content-type - application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));

    app.use(routes);

    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
        // log where we can go to test our GQL API
    });
});

