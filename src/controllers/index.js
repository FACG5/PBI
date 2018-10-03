const express = require('express');
const overview = require('./overview');

const router = express.Router();

router.get('/', overview.get);

module.exports = router;
