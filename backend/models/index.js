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

db.storeItem = require('./storeItem')(sequelize, Sequelize);

db.storeUser = require('./storeUser')(sequelize, Sequelize);
db.receipt = require('./receipt')(sequelize, Sequelize);
db.purchaseItem = require('./purchaseItem')(sequelize, Sequelize);

db.storeUser.hasMany(db.receipt)
db.receipt.belongsTo(db.storeUser);
db.receipt.hasMany(db.purchaseItem);
db.purchaseItem.belongsTo(db.receipt);

module.exports = db;