const express = require('express');
const { get } = require('express/lib/response');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const publisherController = require('../controllers/publisherController')


router.post("/createPublisher", publisherController.createNewPublisher )

router.post("/createAuthor", authorController.createnewAuthor)

router.post("/createBook", bookController.createnewBook)

router.get("/getBook", bookController.getBooksWithAuthAndPublDetails)

router.put("/penguin", bookController.penguin)

router.put("/hcollin", bookController.harperCollins)

router.put("/updateBook", bookController.updateBook)





module.exports = router;