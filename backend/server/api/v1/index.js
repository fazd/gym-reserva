const router = require('express').Router();
const users = require('./users/routes');
const frequency = require('./frequency/routes');

router.use('/users', users);
router.use('/frequency', frequency);

module.exports = router;
