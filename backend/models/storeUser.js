const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const StoreUser = sequelize.define("storeuser", {
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
    });

    return StoreUser;
};
