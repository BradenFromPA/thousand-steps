const express = require('express');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'pug');

// Root route handling
app.get('/', (req, res) => {
    res.render('index');
});

app.listen(PORT, () => {
    console.log(`Your application is running at http://localhost:${PORT}`);
});