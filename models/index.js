const Title = require('./title');
const Platform = require('./platform');
const TitlePlatforms = require('./titlePlatforms');

Title.belongsToMany(Platform, { through: TitlePlatforms });
Platform.belongsToMany(Title, { through: TitlePlatforms });

module.exports = { Title, Platform, TitlePlatforms };