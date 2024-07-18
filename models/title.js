const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');


class Title extends Model { }


Title.init(
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genreId: {
            type: DataTypes.INTEGER,
            references: {
                model: Genre,
                key: 'id',
            },
        },
        decade_created: {
            type: DataTypes.STRING,
        },
        rating: {
            type: DataTypes.DECIMAL(3, 1),
            validate: {
                min: 0,
                max: 10,
            },
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

module.exports = Title;