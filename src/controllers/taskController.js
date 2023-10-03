// controllers/taskController.js
const { Task } = require('../models');

// Create a new task
exports.createTask = async (req, res) => {
    try {
        const { title, status } = req.body;
        const task = await Task.create({ title, status });
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Update a task by ID
exports.updateTask = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, status } = req.body;
        const task = await Task.findByPk(id);
        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }
        task.title = title;
        task.status = status;
        await task.save();

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Get all tasks with pagination (to be implemented)
exports.getAllTasks = async (req, res) => {
    // Implement pagination logic here
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
    // Implement delete logic here
};
