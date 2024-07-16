const router = require("express").Router();
const gamesRoute = require("./games-routes");
const userRoute = require("./user-routes");

router.use("/games", gamesRoute); // Corrected path
router.use("/user", userRoute);

module.exports = router;
