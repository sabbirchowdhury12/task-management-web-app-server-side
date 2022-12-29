const { addTask, myTask, completeTask, deleteTask } = require('../controllers/TaskController');
const router = require('express').Router();

router.post('/addtask', addTask);
router.get('/mytask', myTask);
router.post('/mytask/:id', completeTask);
router.delete('/mytask/:id', deleteTask);

module.exports = router;