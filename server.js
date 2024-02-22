const express = require('express'); // import express
const path = require('path'); // import path

const app = express(); // create express app
const port = process.env.PORT || 3000; // define port

app.use(express.static(path.join(__dirname, 'public'))); // serve static files

app.get('/', (req, res) => { // define route handler
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // serve index.html
});

app.listen(port, () => { // listen for requests
    console.log(`Server is running on http://localhost:${port}`); // log to console once server is running
});
