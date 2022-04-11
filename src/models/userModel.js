const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName: String,
    authorName: String,
    categories: String,
    year: Number
}, {timestamps: true});  //Automatically created new keys in our database.

module.exports = mongoose.model('Book', bookSchema) // collection of Books in your database.


//String
//Number
//Boolean
//Array