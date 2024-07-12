const router = require('express').Router();
const { games, user } = require('./index');

router.get('./', (req, res) => {
    games.findall({
         
    })
});

router.get('/:id', (req, res) => {
    games.findbypk({

    })
});

router.post('./', (req, res) => {
    games.create({

    })
});

module.export = router;