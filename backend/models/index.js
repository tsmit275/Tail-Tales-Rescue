const Sequelize = require("sequelize");

require('dotenv').config()

const sequelize = new Sequelize(process.env.DBURL, {
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

