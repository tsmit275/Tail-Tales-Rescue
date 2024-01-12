const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const PurchasedItem = sequelize.define("purchaseditem", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        receiptId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        productId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        quantity: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    });

    return PurchasedItem;
};
