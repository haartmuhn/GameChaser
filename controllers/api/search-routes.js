const router = require("express").Router();

router.get("/search", async (req, res) => {
  console.log("search route hit");
  try {
    res.render("/search");
  } catch (err) {
    console.error("Error rendering search page:", err);
    res.json(err);
  }
});

module.exports = router;
