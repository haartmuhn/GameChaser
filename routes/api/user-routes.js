const router = require('express').Router();
const { games, user } = require('./index');

router.get('./', (req, res) => {
    user.findall({

    })
});

router.get('/:id', (req, res) => {
    user.findbypk({

    })
});

router.post('./', (req, res) => {
    user.create({

    })
});

module.export = router;