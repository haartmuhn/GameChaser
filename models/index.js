const User = require("./user");
const Games = require("./Games");

// Set up associations here if needed
// For example, if you had a one-to-many relationship:
// User.hasMany(Games, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });
// Games.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = {
  User,
  Games,
};
