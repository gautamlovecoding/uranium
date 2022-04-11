const express = require('express');
const userModel = require("../models/userModal")
const userController = require("../controllers/userController")
const router = express.Router();

router.get('/test-me', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});

router.post('/createUser', userController.createUser);

router.get('/getUsersData', userController.getUsersData);

module.exports = router;
