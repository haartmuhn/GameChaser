const router = require('express').Router();
const { Games, User } = require('./index');
const withAuth = require('../utilis/auth');

router.post('/', withAuth, async (req, res) => {
    try {
        const newGame = await Games.create({
            ...req.body,
            userId: req.session.userId,
        })
    }

})

module.exports = router;
