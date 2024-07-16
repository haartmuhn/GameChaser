const router = require('express').Router();
const { Games, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
        const gamesData = await Games.findAll({
            include: [
                {
                    model; User,
                    attributes: ['title'],
                },
            ],
        });

        const games = gamesData.map((game) => game.get({ plain: ture }));

        res, render('homepage', {
            games,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.json(err);
    }
});

router.get('games/:id', async (req, res) => {
    try {
        const gamesData = await Games.findbypk(req.params.id, {
            include: [
                {
                    model: User,
                    attributes: ['title'],
                },
            ],
        });

        const game = gameData.get({ plain: true });

        res.render('games', {
            ...Game,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('profile', withAuth, async (req, res) => {
    try {
        const userData = await User.findbypk(req.session.userId, {
            attributes: { exclude: ['password'] },
            include: [{ model: Games }],
        });

        const user = userData.get({ plain: true });

        res.render('profile', {
            ...user,
            loggedIn: true
        })
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/login', (req, res) => {
    
    if (req.session.logged_in) {
        res.redirect('/profile');
        return;
    }

    res.render('login');
});

module.exports = router;