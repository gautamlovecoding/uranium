const express = require('express');
const logger = require('./logger');    // calling endpoint


const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('Console to be displayed in terminal');
    res.send('My zeroth ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My first ever api!')
});

router.get('/test-me3', function (req, res) {
    console.log('the end point value is ', logger.url); 
    console.log('calling a function');
    logger.logging();        // calling a function
    res.send('My second ever api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My third ever api!')
});

router.get('/test-me5', function (req, res) {
    res.send('My fourth ever api!')
});


module.exports = router;
// adding this comment for no reason