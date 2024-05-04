// Import required modules
const express = require('express');

// Create an Express application
const app = express();

// Define a route handler for the GET request
app.get('/', (req, res) => {
    // Create a new Date object to get the current time
    const currentTime = new Date();

    // Send the current time as a JSON response
    res.json({ time: currentTime });
});

// Start the server on port 3000
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});