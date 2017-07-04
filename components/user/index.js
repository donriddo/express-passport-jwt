const express = require('express');
const ctrl = require('./controller');
// const isPerson = require('../../middlewares/isPerson');

const router = express.Router();

router.route('/')
  .post(ctrl.create)
  .get(ctrl.list);
router.route('/:id')
  // .all(isPerson)
  .get(ctrl.read)
  .put(ctrl.update);

module.exports = router;
