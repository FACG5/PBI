const express = require('express');
const overview = require('./overview');
const setting = require('./setting');
const generalSettings = require('./generalSettings');

const router = express.Router();

// Home Page //
router.get('/', overview.get);

// Setting Page //
router.get('/setting', setting.get);

router.get('/generalSetting', generalSettings.get);

module.exports = router;
