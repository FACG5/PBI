const express = require('express');
const overview = require('./overview');
const employees = require('./employees');
const addEmployee = require('./addEmployee');
const setting = require('./setting');
const carts = require('./cart');
const convertToSnake = require('../middleware/convertCamelToSnake');

const router = express.Router();

router.get('/', overview.get);
router.get('/employees', employees.get);
router.get('/addEmployee', addEmployee.get);
router.post('/addEmployee', convertToSnake, addEmployee.post);
router.get('/setting', setting.get);
router.get('/carts', carts.get);

module.exports = router;
