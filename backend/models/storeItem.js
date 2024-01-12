const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const StoreItem = sequelize.define("storeitem", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        productName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        productType: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    });

    return StoreItem;
};
