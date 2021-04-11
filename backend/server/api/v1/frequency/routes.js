const router = require('express').Router({
  mergeParams: true,
});
const { auth, owner, me } = require('../auth');
const controller = require('./controller');
const { sanitizers } = require('./model');

router.param('id', controller.id);

router
  .route('/')
  .post(auth, sanitizers, controller.create)
  .get(auth, controller.all);

router
  .route('/:id')
  .get(auth, owner, controller.read)
  .delete(auth, owner, controller.delete);

module.exports = router;
