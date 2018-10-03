const express = require('express');
const overview = require('./overview');
const generalSettings = require('./generalSettings');

const router = express.Router();

// Home Page //
router.get('/', overview.get);

// Setting Page //
router.get('/generalSetting', generalSettings.get);

module.exports = router;
