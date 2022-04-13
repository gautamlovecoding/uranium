
const authorModel= require("../models/authorsModel");
const bookModel = require("../models/bookModel");

const createNewBook = async function (req, res){
    const bookData = req.body;
    const allData = await bookModel.create(bookData)
    res.send( { msg: allData})

}
const createNewAuthor = async function (req, res){
    const authorData = req.body;
    const all = await authorModel.create(authorData)
    res.send( { msg: all})
}

const allBookList = async function (req, res){
    const authDetails = await authorModel.find( { author_name: "Chetan Bhagat"})
    // console.log(authDetails);
    const Id = authDetails[0].author_id
    // console.log(authId);
    const booksName = await bookModel.find( { author_id: Id}).select( { name:1})
    res.send({ msg: booksName})

}

const upDateBookPrice = async function (req, res){
    const bookDetails = await bookModel.find( { name: "Two states"})
    const Id = bookDetails[0].author_id
    // console.log(authId);
    const authName = await authorModel.find({ author_id: Id}).select({authorName:1, _id:0})
    // console.log(authName) // found chetan bhagat is in object in an array

    const bokName = bookDetails[0].name
    // console.log(bokName); // found the name "two states" here
    const updatePrice = await bookModel.findOneAndUpdate({name: bokName}, {price: 100}, {new:true}).select({price:1, _id:0})
    // console.log(updatePrice);  // finding updated prices to 100

    res.send({msg: authName, updatePrice}) 

}


const findBooks = async function (req, res){
    const bookId = await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    // console.log(bookId); //1 1 1 1 2 2  is an array form
    const id = bookId.map(x => x.author_id) //selecting the auther id 

    let temperory =[];
    for (let i = 0; i < id.length; i++) {
        const element = id[i];
        const author = await authorModel.find({author_id: element}).select({authorName:1, _id:0})
        // console.log(author);
        temperory.push(author)
        
    }
    const authorName = temperory.flat()
    // console.log(authorName);

    res.send({msg: authorName}) //which has id 1 =4 times and which has id 2 is showing 2 times...
}





module.exports.createNewBook = createNewBook;

module.exports.createNewAuthor = createNewAuthor;

module.exports.allBookList = allBookList;

module.exports.upDateBookPrice = upDateBookPrice;

module.exports.findBooks = findBooks;

