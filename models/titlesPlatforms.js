const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const { Title } = require('./title');
const { Platform } = require('./platform');


class TitlesPlatforms extends Model { }

TitlesPlatforms.init(
    {
    titleId: {
        type: DataTypes.INTEGER,
        references: {
            model: Title,
            key: 'titleId',
        },
        primaryKey: true,
    },
    platformId: {
        type: DataTypes.INTEGER,
        references: {
            model: Platform,
            key: 'platformId',
        },
        primaryKey: true,
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