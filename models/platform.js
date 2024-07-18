const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Platform extends Model {}


    Platform.init({
        name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "games",
    }
);

module.exports = Platform;