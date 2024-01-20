const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Contact = sequelize.define("contact", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        firstName: {
            type: DataTypes.STRING,
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        message: {
            type: DataTypes.TEXT,
        },
    });

    return Contact;
};
