const express = require('express');
const router = express.Router();

// routes
router.get('/', (req, res) =>{
    res.render('index.html', {title: 'Closet Maiev'})
    //res.sendFile(path.join(__dirname + '/views/index.html'));
});

router.get('/clothing', (req, res) =>{
    res.render('clothing.html', {title: 'Clothing'})
});

router.get('/user', (req, res) =>{
    res.render('user.html', {title: 'User'})
});

router.get('/shoppcar', (req, res) =>{
    res.render('shoppcar.html', {title: 'Shopping car'})
});

module.exports = router;