const express = require('express');
const userModel = require("../models/userModel")
const userController = require("../controllers/userController")
const router = express.Router();

router.get('/test-me', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});

router.post('/createNewBooks', userController.createNewBooks);

router.get('/getListsOfBooks', userController.getListsOfBooks);

module.exports = router;
