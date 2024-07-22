const express = require("express");
const router = express.Router();
const { Title, Platform } = require('../../models');
const { Op } = require('sequelize');

router.post("/", async (req, res) => {
  const { filter, value } = req.body;
  try {
    console.log("Search request received:", { filter, value });

    let whereClause = {};
    let include = [];

    if (filter === 'platform') {
      include = [{
        model: Platform,
        where: { name: value },
        through: { attributes: [] }
      }];
    } else {
      whereClause[filter] = { [Op.like]: `%${value}%` };
    }

    console.log("Query parameters:", { whereClause, include });

    const titleData = await Title.findAll({
      where: whereClause,
      include: include
    });

    console.log("Titles found:", titleData.length);

    const titlesFound = titleData.map((title) => title.get({ plain: true }));
    res.json({ games: titlesFound });
  } catch (error) {
    console.error("Error fetching titles:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
});

module.exports = router;