const router = require("express").Router();
const { Title } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/search", withAuth, async (req, res) => {
  const genre = req.query.genre;
  const platforms = req.query.platforms;
  const ratings = req.query.ratings;
  const decades = req.query.decades;
  const title = req.query.titles;
  const titleData = await Title.findAll({
    where: {
      [Op.or]: [
        { name: title },
        { decade_created: decades },
        { rating: ratings },
        { genre: genre },
        { platforms: platforms },
      ],
    },
  });

  const titles = titleData.map((title) => title.get({ plain: true }));
  res.json(titles);
});

module.exports = router; // Corrected typo
