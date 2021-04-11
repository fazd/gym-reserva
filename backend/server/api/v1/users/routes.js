const router = require('express').Router();
const controller = require('./controller');
const { auth, me } = require('../auth');
const { sanitizers } = require('./model');

/*
 * /api/users/ POST  - CREATE
 * /api/users/ GET - READ ALL
 * /api/users/signin POST -- LOGIN
 * /api/users/:id  GET - READ ONE
 * /api/users/:id  PUT - UPDATE
 * /api/users/:id  DELETE  - DELETE
 */

router.route('/').post(controller.create);

router.route('/signin').post(controller.signin);

router.route('/:id').delete(auth, me, controller.delete);

module.exports = router;
