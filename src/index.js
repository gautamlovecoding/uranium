const express = require('express');
var bodyParser = require('body-parser');

const route = require('./routes/route.js');
const mongoose = require('mongoose');

const router = express.Router();
mongoose.connect('mongodb+srv://gautamkumar1111:Sae755%40gautam@cluster0.v6fgc.mongodb.net/gautam02', { useNewUrlParser: true })
.then(() => console.log('Connected to MongoDB...'))
.catch(err => console.error('Could not connect to MongoDB...', err));


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', route);

app.listen(process.env.PORT || 3000, function() {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
