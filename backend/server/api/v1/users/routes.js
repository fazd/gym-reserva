const router = require('express').Router();
const controller = require('./controller');

router.route('/signin').post(controller.signin);

module.exports = router;
