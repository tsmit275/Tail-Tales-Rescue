const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Adoption = sequelize.define("adoption", {
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

    return Adoption;
};
