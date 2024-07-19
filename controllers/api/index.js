const router = require("express").Router();
const gamesRoute = require("./games-routes");
const userRoute = require("./user-routes");
const aboutRoute = require("./about-routes");
const searchRoute = require("./search-routes");

router.use("/games", gamesRoute); // Corrected path
router.use("/user", userRoute);
router.use("/about", aboutRoute);
router.use("/search", searchRoute);

module.exports = router;
