const sequelize = require('../config/connection');
const seedGenres = require("./genre-seeds");
const seedPlatforms = require("./platforms-seeds");
const seedTitles = require("./titles-seeds");

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  await seedGenres();
  await seedPlatforms();
  await seedTitles();
  console.log("Seeding complete!");
};

seedDatabase().catch((err) => {
  console.error("Seeding failed:", err);
});
