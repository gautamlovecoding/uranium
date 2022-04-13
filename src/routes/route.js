const express = require('express');
const router = express.Router();
const allController= require("../controllers/bookAndAuthorController")

router.post('/createNewBook', allController.createNewBook )

router.post('/createNewAuthor', allController.createNewAuthor )

router.get('/allBookList', allController.allBookList )

router.get('/upDateBookPrice', allController.upDateBookPrice )

router.get('/findBooks', allController.findBooks )



module.exports = router;