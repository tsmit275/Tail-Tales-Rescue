const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Animal = sequelize.define("animal", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
        },
        breed: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture01: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture02: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture03: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture04: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture05: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture06: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture07: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture08: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture09: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture10: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        picture11: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        picture12: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Animal;
};
