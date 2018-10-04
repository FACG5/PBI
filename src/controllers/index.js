const express = require('express');
const overview = require('./overview');
const generalSettings = require('./generalSettings');
const employees = require('./employees');
const addEmployee = require('./addEmployee');
const carts = require('./cart');
const setting = require('./setting');
const convertToSnake = require('../middleware/convertCamelToSnake');

const router = express.Router();

router.get('/', overview.get);
router.get('/generalSetting', generalSettings.get);
router.post('/generalSetting', convertToSnake, generalSettings.post);
router.get('/employees', employees.get);
router.get('/addEmployee', addEmployee.get);
router.post('/addEmployee', convertToSnake, addEmployee.post);
router.get('/carts', carts.get);
router.get('/setting', setting.get);
router.post('/setting', setting.post);

module.exports = router;
