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
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        address: {
            type: DataTypes.STRING,
        },
        address2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.STRING,
        },
        dog: {
            type: DataTypes.STRING,
        },
        cat: {
            type: DataTypes.STRING,
        },
        exotic: {
            type: DataTypes.STRING,
        },
    });

    return Adoption;
};