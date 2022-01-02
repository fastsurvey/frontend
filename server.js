const express = require('express');
const path = require('path');

const app = express();
app.disable('x-powered-by');

// Serve the static files from the React app
app.use('/dist', express.static(path.join(__dirname + '/dist')));
app.use(
    '/documentation',
    express.static(path.join(__dirname + '/dist/documentation')),
);

// Handles any requests that don't match the ones above
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/app/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;
