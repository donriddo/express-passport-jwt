const UserRoutes = require('./user');
const express = require('express');

const router = express.Router();

global._ = require('lodash');

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/user', UserRoutes);

module.exports = router;
