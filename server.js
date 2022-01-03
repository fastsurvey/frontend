const express = require('express');
const path = require('path');

const app = express();
app.disable('x-powered-by');

app.use(
    '/documentation',
    express.static(path.join(__dirname, 'dist/documentation')),
);
app.get('/documentation*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/documentation/index.html'));
});

app.use('/app', express.static(path.join(__dirname, 'dist/app')));
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'dist/app/index.html'));
});

// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

module.exports = app;
