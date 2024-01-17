const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Volunteer = sequelize.define("volunteer", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        reason: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Volunteer;
};

//mysql, mariadb, MSSQL, Oracle etc etc
//connection string - localhost....
//port - 3306
//username - 
//password - 
// database name
//syntax
//
