const express = require('express');
const cakeCtrl = require('./controller');


const router = express.Router();

router.route('/').get((req, res) => res.send('Viewing Cake'));
router.route('/display').get(cakeCtrl.display);

module.exports = router;
