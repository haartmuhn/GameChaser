const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Title extends Model { }


Title.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        genre: {
            type: DataTypes.STRING,
           allowNull: false,
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
        platform: {
            type: DataTypes.STRING,
            allowNull: true,
            get() {
              return this.getDataValue('platform').split(',');
            },
            set(val) {
              this.setDataValue('platform', val.join(','));
            },
          }
    },

    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: "title",
    }
);

module.exports = Title;