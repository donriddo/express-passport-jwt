const UserRoutes = require('./user');
const Auth = require('./authentication');
const express = require('express');

const router = express.Router();

global._ = require('lodash');

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/user', UserRoutes);

router.use('/login', Auth);

module.exports = router;
