const { addTask, myTask, completeTask, deleteTask, allCompleteTasks, inCompleteTask, deleteCompleteTask, updateTask } = require('../controllers/userController');

const router = require('express').Router();
// task route
router.post('/addtask', addTask);
router.get('/mytask', myTask);
router.post('/mytask/:id', completeTask);
router.delete('/mytask/:id', deleteTask);
router.get('/completetask', allCompleteTasks);
router.post('/completetask/:id', inCompleteTask);
router.delete('/completetask/:id', deleteCompleteTask);
router.post('/updatetask/:id', updateTask);

module.exports = router;