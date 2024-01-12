const {DataTypes} = require("sequelize");

module.exports = (sequelize) => {
    const Receipt = sequelize.define("receipt", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        total: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
    });

    return Receipt;
};
