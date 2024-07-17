const router = require('express').Router();
const { Games, User } = require('./index');
const withAuth = require('../utils/auth');

router.get("/:id", (req, res) => {
  games.findbypk({});
});

router.post("/", (req, res) => {
  // Corrected path
  games.create({});
});

module.exports = router; // Corrected typo
