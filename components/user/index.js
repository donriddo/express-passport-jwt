const express = require('express');
const ctrl = require('./controller');
const isAuthenticated = require('../../middlewares/isAuthenticated');

const router = express.Router();

router.route('/')
  .post(ctrl.create)
  .get(ctrl.list);
router.route('/:id')
  .all(isAuthenticated)
  .get(ctrl.read)
  .put(ctrl.update);

module.exports = router;
