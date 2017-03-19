const express = require('express');
const ctrl = require('./controller');
const isPerson = require('../../middlewares/isPerson');

const router = express.Router();

router.route('/').get(ctrl.list);
router.route('/:id')
	  .all(isPerson)
	  .get(ctrl.get)
	  .post(ctrl.get)
	  .put(ctrl.get);
router.route('/sum/:num').get(ctrl.sum5);

module.exports = router;
