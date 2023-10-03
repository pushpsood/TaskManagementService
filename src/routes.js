const express = require('express');
const router = express.Router();
const taskController = require('./controllers/taskController');

// Create a new task
router.post('/tasks', taskController.createTask);

// Update a task by ID
router.put('/tasks/:id', taskController.updateTask);

// Get all tasks with pagination
router.get('/tasks', taskController.getAllTasks);

// Delete a task by ID
router.delete('/tasks/:id', taskController.deleteTask);

module.exports = router;
