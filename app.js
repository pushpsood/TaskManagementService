// app.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Middleware for parsing JSON data
app.use(bodyParser.json());

// Define routes for CRUD operations (to be implemented later)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
