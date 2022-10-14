const express = require('express');
const router = express.Router();
const {register, login, getAllUsers } = require('../controllers/user');


router.route('/register').post(register);
router.route('/login').post(login);
router.route('/getUsers').get(getAllUsers);

module.exports = router;