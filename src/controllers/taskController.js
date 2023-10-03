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

// Get all tasks with pagination
exports.getAllTasks = async (req, res) => {
    const page = req.query.page || 1; // Get the requested page number from the query parameters
    const perPage = req.query.perPage || 10; // Number of tasks per page

    try {
        const tasks = await Task.findAll({
            limit: perPage,
            offset: (page - 1) * perPage, // Calculate the offset based on the page number
        });

        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};

// Delete a task by ID
exports.deleteTask = async (req, res) => {
    const taskId = req.params.id; // Get the task ID from the URL parameters

    try {
        const task = await Task.findByPk(taskId);

        if (!task) {
            return res.status(404).json({ error: 'Task not found' });
        }

        await task.destroy(); // Delete the task

        res.status(204).send(); // Respond with a 204 No Content status on successful deletion
    } catch (error) {
        res.status(500).json({ error: 'Internal Server Error' });
    }
};