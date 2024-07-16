const seedGenres = require("./genres");
const seedPlatforms = require("./platforms");
const seedTitles = require("./titles");

const seedDatabase = async () => {
  await seedGenres();
  await seedPlatforms();
  await seedTitles();
  console.log("Seeding complete!");
};

seedDatabase().catch((err) => {
  console.error("Seeding failed:", err);
});
