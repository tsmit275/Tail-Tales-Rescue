const Sequelize = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(process.env.DB_URL, {
    dialect: process.env.DIALECT,
    protocol: process.env.PROTOCOL,
})

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//models
db.animals = require('./animal')(sequelize, Sequelize);
db.adoption = require('./adoption')(sequelize, Sequelize);
db.volunteer = require('./volunteer')(sequelize, Sequelize);
db.contact = require('./contact')(sequelize, Sequelize);

module.exports = db;
