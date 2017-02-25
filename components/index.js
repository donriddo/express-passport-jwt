const cakeRoutes = require('./cake');
const express = require('express');

const router = express.Router();

router.get('/health-check', (req, res) => res.send('OK'));

router.use('/cake', cakeRoutes);

module.exports = router;
