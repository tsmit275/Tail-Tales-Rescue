const Sequelize = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    host: process.env.HOST,
    dialect: process.env.DIALECT,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.animals = require('./animal')(sequelize, Sequelize);
db.adoption = require('./adoption')(sequelize, Sequelize);
db.volunteer = require('./volunteer')(sequelize, Sequelize);
db.contact = require('./contact')(sequelize, Sequelize);

module.exports = db;


/*
Open up Postgres
Create a db called Tailtales - not a schema

Open a query window for the "Tailtales DB" and paste in the following
CREATE USER tailtales WITH PASSWORD 'tailtales';
GRANT USAGE, CREATE ON SCHEMA public to tailtales;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public to tailtales;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA public to tailtales;
GRANT ALL PRIVILEGES ON ALL FUNCTIONS IN SCHEMA public to tailtales;

ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON TABLES TO tailtales;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON SEQUENCES TO tailtales;
ALTER DEFAULT PRIVILEGES IN SCHEMA public GRANT ALL PRIVILEGES ON FUNCTIONS TO tailtales;

in the .env

*/