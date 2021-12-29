const router = require('express').Router();
const createTask = require('../controllers/task/createTask');
const listTasks = require('../controllers/task/getTasks');
const updateTaskSatus = require('../controllers/task/updateStatus');
const { jwtVerify } = require('../middlewares/authenticateUser');

router.post('/create-tasks',jwtVerify,createTask)
router.get('/list-tasks',jwtVerify,listTasks)
router.patch('/change-task-status',jwtVerify,updateTaskSatus)

module.exports = router
