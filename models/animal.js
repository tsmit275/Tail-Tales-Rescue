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
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
        },
    });

    return Animal;
};
