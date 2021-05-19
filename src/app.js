const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000

// Configure Public path
app.use(express.static(path.join(__dirname, './public')));


// Configure Views path
app.set('views', path.join(__dirname, './views'));
// Set view engine to Pug
app.set('view engine', 'pug');


// Root route handling
app.get('/', (req, res) => {
    res.render('index');
});

// Log route handler
const log = require('./routes/log');
app.use('/log', log);

app.listen(PORT, () => {
    console.log(`Your application is running at http://localhost:${PORT}`);
});