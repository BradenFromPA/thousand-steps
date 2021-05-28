const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('log/log', {
        name: 'Braden H.',
        town: 'Mount Union, PA'
    })
});

router.get('/signin', (req, res) => {
    res.render('log/signin/signin')
});

module.exports = router;