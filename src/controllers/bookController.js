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

    const penguin = async function (req, res){
        let peng_id = await bookModel.updateMany(
            {publisher: "6259182220afd4459bab2edc"},
            {$set:{isHardCover: true}},
             {new:true}
        )
            res.send({msg: peng_id});
    }

    const harperCollins = async function (req, res){
        let hcollin_id = await bookModel.updateMany(
            {publisher: "625a80c3c001e3588a599bc1"},
            {$set:{isHardCover: true}},
             {new:true}
        )
            res.send({msg: hcollin_id});
    }

    const updateBook = async function(req, res){
        let data = await bookModel.updateMany(
            {rating:{$gt: 3.5}},
            {$inc: {price:10}}
        )
        res.send({msg: data});
    }

    


module.exports.createnewBook = createnewBook

module.exports.getBooksWithAuthAndPublDetails = getBooksWithAuthAndPublDetails

module.exports.penguin = penguin

module.exports.harperCollins = harperCollins

module.exports.updateBook = updateBook


