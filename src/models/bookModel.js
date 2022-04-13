const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    bookName:  { type: String, required: true },
    prices: { Indian: Number, Europian: Number },
    year: { type: Number, default: 2021 },
    tags: [String],
    authorName: String,
    totalPages: Number,
    stockAvailable: Boolean

}, {timestamps: true});  //Automatically created new keys in our database.

module.exports = mongoose.model('Book', bookSchema) // collection of Books in your database.


//String
//Number
//Boolean
//Array