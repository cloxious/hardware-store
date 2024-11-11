const { body, validationResult } = require('express-validator');

const validateUserRegistration = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  body('name').not().isEmpty().withMessage('Name is required'),
  body('surname').not().isEmpty().withMessage('Surname is required'),
];

const validateLogin = [
  body('email').isEmail().withMessage('Invalid email format'),
  body('password').not().isEmpty().withMessage('Password is required'),
];

const checkValidationErrors = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

module.exports = {
  validateUserRegistration,
  validateLogin,
  checkValidationErrors,
};
