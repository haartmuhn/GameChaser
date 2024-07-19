const router = require("express").Router();
const { Title, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  console.log("homepage route");
  try {
    const gamesData = await Title.findAll({
      // include: [
      //     {
      //         model: User,
      //         attributes: ['title'],
      //     },
      // ],
    });

    const games = gamesData.map((game) => game.get({ plain: true }));
    console.log("games", games);

    res.render("homepage", {
      games,
      // loggedIn: req.session.loggedIn
    });
  } catch (err) {
    res.json(err);
  }
});

router.get("games/:id", async (req, res) => {
  try {
    const gamesData = await Games.findbypk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ["title"],
        },
      ],
    });

    const game = gamesData.get({ plain: true });

    res.render("games", {
      ...game,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findbypk(req.session.userId, {
      attributes: { exclude: ["password"] },
      include: [{ model: Games }],
    });

    const user = userData.get({ plain: true });

    res.render("profile", {
      ...user,
      loggedIn: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile");
    return;
  }

  res.render("login");
});

router.get("/about", async (req, res) => {
  console.log("about route");
  try {
    res.render("about");
  } catch (err) {
    res.json(err);
  }
});

router.get("/search", async (req, res) => {
  console.log("search route");
  try {
    res.render("search");
  } catch (err) {
    res.json(err);
  }
});

// router.get('/search', async (req, res) => {
//     console.log('search route');
//     try {
//         const gamesData = await Title.findAll({
//                 //     {
//                     //         model: User,
//                 //     //         attributes: ['title'],
//                 //     //     },
//                 //     // ],
//                 // });

//                 // const games = gamesData.map((game) => game.get({ plain: true }));
//                 // console.log("games", games);

//                 res.render('preferences', {
//                     // games,
//                     // loggedIn: req.session.loggedIn
//                 });
//             } catch (err) {
//                 res.json(err);
//             }
//         });

module.exports = router;

//     // where: {user_id: req.session.user_id}
