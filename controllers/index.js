const router = require('express').Router();
// const apiRoutes = require('../controllers/api');
const homeRoutes = require('./homeRoutes');

const apiRoutes = require("./api");

router.use("/api", apiRoutes);
router.use("/", homeRoutes);

router.use((req, res) => {
  res.send("Wrong Route!!!!!!!");
});

module.exports = router;
