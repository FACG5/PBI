const express = require('express');
const overview = require('./overview');
const generalSettings = require('./generalSettings');
const employees = require('./employees');
const addEmployee = require('./addEmployee');
const carts = require('./cart');
const convertToSnake = require('../middleware/convertCamelToSnake');
const editEmployee = require('./editEmployee');
const login = require('./login');

const router = express.Router();

router.get('/', overview.get);
router.get('/generalSetting', generalSettings.get);
router.post('/generalSetting', convertToSnake, generalSettings.post);
router.get('/employees', employees.get);
router.get('/addEmployee', addEmployee.get);
router.post('/addEmployee', convertToSnake, addEmployee.post);
router.put('/employee', convertToSnake, editEmployee.put);
router.get('/login', login.get);
router.post('/login', login.post);
router.delete('/carts', carts.delete);
router.post('/carts', carts.post);

module.exports = router;
