console.log("=============================================1234");
console.log("Linked!!!");
const express = require("express");
const router = express.Router();
const { Title } = require("../../models");
// const withAuth = require("../../utils/auth");
const { Op } = require('sequelize');
// decades,
// genre, platforms, ratings,
// Search route with POST method to handle search logic
router.post("/", async (req, res) => {
  const { genre } = req.body;
  try {
    console.log('+--------------------- api/users/ hit!!! --------------------');
    console.log("Request body titles:", genre);
    const titleData = await Title.findAll({
      where : {
        genre : req.body.titles
      }
    });
    const titles = titleData.map( title => title.get( { plain : true } ) );
    console.log( titles );
    console.log("SQL query:", titleData.query);
    console.log("Title data:", titleData);
    const titlesFound = titleData.map((title) => title.get({ plain: true }));
    console.log("=============================================565788");
    console.log(titlesFound);
    res.render('search', titlesFound);
  } catch (error) {
    console.error("Error fetching titles:", error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
// Route to render the search page (GET method)
router.post("/:column", async (req, res) => {
  console.log("search route hit");
  const column = req.params.column
  try {
    if (column === "genre") {
      const titleData = await Title.findAll({
        where: {
          genre:req.body.value
        },
      });
      console.log(titleData, "titleData")
      res.status(200).json(titleData)
    }
  } catch (err) {
    console.error("Error rendering search page:", err);
    res.json(err);
  }
});
module.exports = router;