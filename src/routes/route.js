const express = require('express');
const bookController = require("../controllers/bookController");
const router = express.Router();


router.post('/createBooks', bookController.createBook);

router.get('/bookList', bookController.bookList);

router.post('/getBooksInYear', bookController.getBooksInYear);

router.post('/getParticularBooks', bookController.getParticularBooks);

router.get('/getXINRBooks', bookController.getXINRBooks);

router.get('/getRandomBooks', bookController.getRandomBooks);

module.exports = router;
