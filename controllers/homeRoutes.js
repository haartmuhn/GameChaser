const router = require("express").Router();
const { Title, User } = require("../models");
const withAuth = require("../utils/auth");
// const { Op } = require('sequelize');
// const express = require("express");

router.get("/", async (req, res) => {
  console.log("homepage route");
  try {
console.log("is logged in", res.session.isLoggedIn);
    res.render("homepage", {isLoggedIn: res.session.isLoggedIn});

  } catch (err) {
    res.json(err);
  }
});

router.get("/user", (req, res) => {
  if (req.session.isLoggedIn) {
    res.redirect("/");
    return;
  }
  console.log("HELLO");
  console.log(req.session.isLoggedIn);

  res.render("login");
});

router.get("/about", async (req, res) => {
  console.log("about route");
  try {
    res.render("about", {isLoggedIn: req.session.isLoggedIn});
  } catch (err) {
    res.json(err);
  }
});

router.get("/search", async (req, res) => {
  console.log("search route with session");
  try {
    res.render("search", {isLoggedIn: req.session.isLoggedIn});
  } catch (err) {
    res.json(err);
  }
});

router.get("/profile", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/profile", {isLoggedIn: req.session.isLoggedIn});
    return;
  }

  res.render("profile");
});

router.get("/signout", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/signout");
    return;
  }

  res.render("signout");
});

// router.get("/", async (req, res) => {
//   const { genre, platforms, ratings, decades, titles } = req.body;

//   try {
//     console.log('+--------------------- api/users/ hit!!! --------------------');

//     const titleData = await Title.findAll({
//       where: {
//         [Op.or]: [
//           { name: titles },
//           { decade_created: decades },
//           { rating: ratings },
//           { genre: genre },
//           { platforms: platforms },
//         ],
//       },
//     });



//     const titlesFound = titleData.map((title) => title.get({ plain: true }));
//     console.log("=============================================");
//     console.log(titlesFound);

//     res.render('/', titlesFound);

//   } catch (error) {
//     console.error("Error fetching titles:", error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });
router.get("/search", async (req, res) => {
  console.log("search route");
  try {
    res.render("search");
  } catch (err) {
    res.json(err);
  }
});

module.exports = router;

//     // where: {user_id: req.session.user_id}
router.get("/profile", async (req, res) => {
  console.log("profile route");
  try {
    res.render("profile");
  } catch (err) {
    res.json(err);
  }
  res.render("profile");
});

router.get("/signout", async (req, res) => {
  console.log("signout route");
  try {
    res.render("signout");
  } catch (err) {
    res.json(err);
  }
  res.render("signout");
});