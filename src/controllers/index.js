const express = require('express');
const overview = require('./overview');
const setting = require('./setting');

const router = express.Router();

// Home Page //
router.get('/', overview.get);

// Setting Page //
router.get('/setting', setting.get);

module.exports = router;
