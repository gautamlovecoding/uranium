const express = require('express');
const _ = require('lodash');

const logger = require('../logger/logger');    // calling endpoint
const helpers = require('../util/helper')
const format = require('../validator/formatter')

const router = express.Router();


router.get('/test-me', function (req, res) {
    //For logger file
    logger.logging();        // calling a function
    res.send('My first Api!')

    //For helper file
    helpers.printDate();
    helpers.printMonth();
    helpers.getBatchInfo();

    // For formatter file
    format.trimming();
    
});
router.get('/hello', function (req, res) {
 /*****4th ques (A) ******************/
    const month = 
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'  
    ]
   
    console.log(_.chunk(month, 4));

    res.send('My first Api!');


/*****4th ques (B) ******************/
    const oddNum = [1,3,5,7,9,11,13,15,17,19];
    console.log(_.tail(oddNum));


/*****4th ques (C) ******************/
    const arr1 = [1,2,3,45,5];
    const arr2 = [11,10,3,45,5];
    const arr3 = [1,20,3,45,5];
    const arr4 = [15,21,35,45,5];
    const arr5 = [1,20,30,45,5];

    console.log(_.union(arr1,arr2,arr3,arr4,arr5));

    /*****$th ques (D) ******************/

    let createObj = [
        ['name', 'Gautam'], 
        ['live', 'Bihar'], 
        ['used', 'nodejs']
    ]
      
    let obj = _.fromPairs(createObj);
      
    console.log(obj)

});


module.exports = router;
// adding this comment for no reason