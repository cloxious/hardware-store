const express = require('express');
const { validateLogin, validateUserRegistration } = require('../middlewares/validationMiddleware');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', validateUserRegistration, registerUser);
router.post('/login', validateLogin, loginUser);

module.exports = router;
