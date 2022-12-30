const { register } = require('../controllers/userController');

const router = require('express').Router();

//register route
router.post('/register', register);


module.exports = router;