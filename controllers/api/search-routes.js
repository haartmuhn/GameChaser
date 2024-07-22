const express = require("express");
const router = express.Router();
const { Title } = require("../../models");

// Handle search functionality with POST request
router.post("/", async (req, res) => {
  const { filter, value } = req.body;

  try {
    console.log(
      "+--------------------- api/search POST hit!!! --------------------"
    );
    console.log("Request body:", req.body);

    const whereObject = {};
    whereObject[filter] = value;
    console.log("whereObject for query:", whereObject);

    const titleData = await Title.findAll({
      where: whereObject,
    });

    // Log raw title data before mapping
    console.log("Raw titleData from database:", titleData);

    const titlesFound = titleData.map((title) => title.get({ plain: true }));
    console.log("Titles found (mapped):", titlesFound);

    res.json({ games: titlesFound }); // Ensure the response has 'games' property
  } catch (error) {
    console.error("Error fetching titles:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Render the search page on GET request
router.get("/search", async (req, res) => {
  console.log("GET /search route hit");
  try {
    res.render("search");
  } catch (err) {
    console.error("Error rendering search page:", err);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
