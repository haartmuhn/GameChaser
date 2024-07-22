const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class TitlesPlatforms extends Model { }

TitlesPlatforms.init(
    {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    titleId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'title',
            key: 'id',
        },
    },
    platformId: {
        type: DataTypes.INTEGER,
        references: {
            model: 'platform',
            key: 'id',
        },
    },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "titlePlatforms",
    }
);

module.exports = TitlesPlatforms;