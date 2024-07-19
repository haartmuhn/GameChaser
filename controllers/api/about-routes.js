const router = require("express").Router();

router.get("/about", async (req, res) => {
  console.log("about route hit");
  try {
    res.render("/about");
  } catch (err) {
    console.error("Error rendering about page:", err);
    res.json(err);
  }
});

module.exports = router;
