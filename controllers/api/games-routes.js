const router = require('express').Router();
const { Title } = require('../../models');
const withAuth = require('../../utils/auth');


router.get("/search", (req, res) => {
  const searchValue = req.body.search
  const titleData = Title.findAll({
    where: {
      [Op.or]: [{ name: searchValue }, { decade_created: searchValue }, { rating: searchValue }, { genre: searchValue }, { platforms: searchValue }],
    },
  })

  const titles = titleData.map((title) => title.get({ plain: true }))
  res.json(titles)
})


module.exports = router; // Corrected typo
