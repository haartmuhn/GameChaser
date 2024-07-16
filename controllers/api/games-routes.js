const router = require("express").Router();
const { games, user } = require("./index");

router.get("/", (req, res) => {
  // Corrected path
  games.findall({});
});

router.get("/:id", (req, res) => {
  games.findbypk({});
});

router.post("/", (req, res) => {
  // Corrected path
  games.create({});
});

module.exports = router; // Corrected typo
