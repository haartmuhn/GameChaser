const User = require("./user");
const Platform = require('./platform');
const Title = require('./title');
const TitlesPlatforms = require('./titlesPlatforms');




// Genre.hasMany(Title, {
//     foreignKey: 'genreId'
// }
// )

Title.belongsToMany(Platform, { through: TitlesPlatforms, foreignKey: 'titleId' });
Platform.belongsToMany(Title, { through: TitlesPlatforms, foreignKey: 'platformId' });

// User.hasMany(Games, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });
// Games.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User, Title, TitlesPlatforms, Platform};
