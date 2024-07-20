const express = require("express");
const router = express.Router(); // Create an express Router instance

// Require other route modules
const userRoute = require("./user-routes");
const aboutRoute = require("./about-routes");
const searchRoute = require("./search-routes");

// Mount routes using the correct paths
router.use("/user", userRoute);
router.use("/about", aboutRoute);
router.use("/search", searchRoute);

module.exports = router;
