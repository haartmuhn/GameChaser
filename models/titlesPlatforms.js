const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TitlesPlatforms extends Model { }

TitlesPlatforms.init(
    {
    titleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Title,
            key: 'id',
        },
        primaryKey: true,
    },
    platformId: {
        type: DataTypes.INTEGER,
        references: {
            model: Platform,
            key: 'id',
        },
        primaryKey: true,
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

module.exports = TitlesPlatforms;