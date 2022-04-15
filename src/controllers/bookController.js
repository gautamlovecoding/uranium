const authorModel = require("../model.js/authorModel")
const bookModel = require("../model.js/bookModel")
const publisherModel = require("../model.js/publisherModel")

const createnewBook = async function (req, res) {
    let book = req.body
    if (book.author && book.publisher) {
        let authIdCheck = await authorModel.exists({ _id: book.author })
        let publIdCheck = await publisherModel.exists({ _id: book.publisher })
        if (authIdCheck && publIdCheck) {
            if (!await bookModel.exists(book)) {
                let bookCreated = await bookModel.create(book)
                res.send({ msg: bookCreated })
            } else res.send({ msg: "Book already exists" })
        }
        else res.send("AuthorId and publisherId both or any one of these are Invalid")
    }
    else res.send ({msg: "Author and publisher Must be present"})
}

const getBooksWithAuthAndPublDetails = async function(req, res){
    let specificBook = await bookModel.find().populate('author').populate('publisher')
    res.send ({msg: specificBook})
}

module.exports.createnewBook = createnewBook

module.exports.getBooksWithAuthAndPublDetails = getBooksWithAuthAndPublDetails
