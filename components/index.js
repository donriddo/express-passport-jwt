const CakeRoutes = require('./cake');
const UserRoutes = require('./user');
const express = require('express');

const router = express.Router();

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/cake', CakeRoutes);

router.use('/user', UserRoutes);

module.exports = router;
