const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    mobile: {
        type: String,
        unique: true,  //validation
        required: true  //validation
    },
    emailId: String,
    gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"] //can't write anything here ( random value) & (validation) Case sensitive also.
    },
    age: Number,
    
    // isIndian: Boolean,
    // parentsInfo: { motherName: String, fatherName: String, siblingName: String},
    // cars: [ String ]
    
}, {timestamps: true});  //Automatically created new keys in our database.

module.exports = mongoose.model('User', userSchema) // collection of users in your database.


//String
//Number
//Boolean
//Array