const express = require('express');
const overview = require('./overview');
const employees = require('./employees');
const addEmployee = require('./addEmployee');

const router = express.Router();

router.get('/', overview.get);
router.get('/employees', employees.get);
router.get('/addEmployee', addEmployee.get);

module.exports = router;
