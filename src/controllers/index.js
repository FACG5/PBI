const express = require('express');
const overview = require('./overview');
const generalSettings = require('./generalSettings');
const convertCamelToSnake = require('../middleware/convertCamelToSnake');

const router = express.Router();

// Home Page //
router.get('/', overview.get);

// Setting Page //
router.get('/generalSetting', generalSettings.get);
router.post('/generalSetting', convertCamelToSnake, generalSettings.post);

module.exports = router;
