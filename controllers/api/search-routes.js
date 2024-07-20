
const express = require("express");
const router = express.Router();
const { Title } = require("../../models");
const withAuth = require("../../utils/auth");
const { Op } = require('sequelize');

// Search route with POST method to handle search logic
router.post("/search", withAuth, async (req, res) => {
  const { genre, platforms, ratings, decades, titles } = req.body;

  try {
    const titleData = await Title.findAll({
      where: {
        [Op.or]: [
          { name: titles },
          { decade_created: decades },
          { rating: ratings },
          { genre: genre },
          { platforms: platforms },
        ],
      },
    });

    const titlesFound = titleData.map((title) => title.get({ plain: true }));

    res.json(titlesFound);
  } catch (error) {
    console.error("Error fetching titles:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to render the search page (GET method)
router.get("/search", async (req, res) => {
  console.log("search route hit");
  try {
    res.render("search");
  } catch (err) {
    console.error("Error rendering search page:", err);
    res.json(err);
  }
});

module.exports = router;