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
        },
        picture01: {
            type: DataTypes.STRING,
        },
        picture01: {
            type: DataTypes.STRING,
        },
        gender: {
            type: DataTypes.STRING,
        },
    });

    return Animal;
};
