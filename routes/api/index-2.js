const router = require('express').router;
const gamesRoute = require('./games-routes');
const userRoute = require('./user-routes');
 
// used for middleware function with a path through ./games and ./user
router.use('./games', gamesRoute);
router.use('./user', userRoute);

module.exports = router;