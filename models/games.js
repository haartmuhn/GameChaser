const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Decades extends Model { }


Decades.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    decade_created: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "decades",
  }
);

module.exports = Decades;
// class Games extends Model {}

// Games.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     ratings: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     genre: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     decade_created: {
//       type: DataTypes.STRING, 
//       allowNull: false,
//     },
//     camera_perspective: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     gaming_platform_used: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//   },
//   {
//     sequelize,
//     timestamps: false,
//     freezeTableName: true,
//     underscored: true,
//     modelName: "games",
//   }
// );

// module.exports = Games;
