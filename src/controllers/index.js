const express = require('express');
const overview = require('./overview');
const employees = require('./employees');
const addEmployee = require('./addEmployee');
const setting = require('./setting');
const convertToSnake = require('../middleware/convertCamelToSnake');
const editEmployee = require('./editEmployee');

const router = express.Router();

router.get('/', overview.get);
router.get('/employees', employees.get);
router.get('/addEmployee', addEmployee.get);
router.post('/addEmployee', convertToSnake, addEmployee.post);
router.put('/employee', convertToSnake, editEmployee.put);
router.get('/setting', setting.get);

module.exports = router;
