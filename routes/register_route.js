const RegisterController = require('../controller/register_controller');
const express = require('express');
const router = express.Router();
const register = require('../controller/register_controller');

// TO REGISTER USERS
router.post('/register',RegisterController);



module.exports = router;