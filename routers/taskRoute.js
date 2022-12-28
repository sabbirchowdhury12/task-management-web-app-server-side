const { addTask } = require('../controllers/TaskController');
const router = require('express').Router();

router.post('/addtask', addTask);

module.exports = router;