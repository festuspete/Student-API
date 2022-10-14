const express = require('express');
const router = express.Router();
const {createDepartment} = require('../controllers/department');

router.route('/department').post(createDepartment);

module.exports = router;