const router = require('express').Router();
const { Games } = require('../../models');
const withAuth = require('../../utils/auth');

router.post("/", withAuth, async (req, res) => {
  try {
    const newGame = await Games.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.status(200).json(newGame);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.put('/games/:id', withAuth, async (req, res) => {
//   const id = req.params.id;
//   const data = req.body;

//   try {
//     const game = await db.Games.update(data, {
//       where: {
//         id
//       }
//     });
//     res.send("list updated");
//   } catch (err) {
//     res, send(err);
//   }
// });

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const gameData = await Games.destroy({
      where: {
        id: req.params.id,
        userId: req.session.userId,
      },
    });

    if (!gameDataData) {
      res.status(404).json({ message: "no game found" });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/', withAuth, async (req, res) => {
//   try {
//     const titles = await Title.findAll({
//       include: [
//         {
//           model: Genre,
//           attributes: ['name'],
//         },
//         {
//           model: Platform,
//           attributes: ['name'],
//           through: { attributes: [] }, // Exclude TitlesPlatforms attributes
//         },
//       ],
//     });
//     res.json(titles);
//   } catch (error) {
//     console.error('Error fetching titles:', error);
//     res.status(500).json({ error: 'Error fetching titles' });
//   }
// });


module.exports = router; // Corrected typo
