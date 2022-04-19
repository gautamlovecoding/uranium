const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


mongoose.connect("mongodb+srv://gautamkumar1111:Sae755%40gautam@cluster0.v6fgc.mongodb.net/gautam1122DB", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use (
    function (req, res, next) {
        let formatDate = new Date();
        let year = formatDate.getFullYear();
        let month = formatDate.getMonth()+1;
        let date = formatDate.getDate();
        let hour = formatDate.getHours();
        let minutes = formatDate.getMinutes();
        let second = formatDate.getSeconds();

        // 2010-08-19 14:00:00 , 123.459.898.734 , /createUser

        console.log(year +"-" + month + "-" + date + " " + hour + ":" + minutes + ":" + second + " , " + req.socket.remoteAddress + " , "+ req.path);
  }
  );

app.use('/', route);


app.listen(process.env.PORT || 4000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 4000))
});
