const User = require("./user");
const Games = require("./games");


Title.belongsTo(Genre, { foreignKey: 'genreId' });
Title.belongsToMany(Platform, { through: TitlesPlatforms, foreignKey: 'titleId' });
Platform.belongsToMany(Title, { through: TitlesPlatforms, foreignKey: 'platformId' });

// User.hasMany(Games, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });
// Games.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Games };
