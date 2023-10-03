// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Import your routes from routes.js
const routes = require('./src/routes');

// Use the routes in your application
app.use('/api', routes); // Use '/api' as the base path for your API routes

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
