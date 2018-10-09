const express = require('express');

const overview = require('./overview');
const generalSettings = require('./generalSettings');
const employees = require('./employees');
const addEmployee = require('./addEmployee');
const carts = require('./cart');
const setting = require('./setting');
const convertToSnake = require('../middleware/convertCamelToSnake');
const editEmployee = require('./editEmployee');
const errors = require('./errors');
const reports = require('./reports');
const employeeDetalis = require('./employeeDetails');
const logout = require('./logout');
const login = require('./login');
const files = require('./files');
const autheticate = require('../middleware/authentication');

const router = express.Router();

router.get('/login', login.get);
router.post('/login', login.post);
router.get('/', autheticate, overview.get);
router.get('/generalSetting', autheticate, generalSettings.get);
router.post('/generalSetting', autheticate, convertToSnake, generalSettings.post);
router.get('/employees', autheticate, employees.get);
router.get('/addEmployee', autheticate, addEmployee.get);
router.post('/addEmployee', autheticate, convertToSnake, addEmployee.post);
router.put('/employee', autheticate, convertToSnake, editEmployee.put);
router.get('/logout', autheticate, logout.get);
router.get('/carts', autheticate, carts.get);
router.get('/reports', autheticate, reports.get);
router.post('/reports', autheticate, reports.post);
router.get('/employee/:id', autheticate, employeeDetalis.get);
router.get('/setting', autheticate, setting.get);
router.post('/setting', autheticate, setting.post);
router.delete('/carts', autheticate, carts.delete);
router.post('/carts', autheticate, carts.post);
router.put('/carts', autheticate, carts.put);
router.post('/uploadFiles', files.post);

router.use(errors.client);
router.use(errors.server);

module.exports = router;
