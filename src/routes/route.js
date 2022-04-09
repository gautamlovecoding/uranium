const express = require('express');
const player = require('../playerlist/players');

const router = express.Router();

router.post('/test-post1', function (req, res) {

    res.send( {  msg: "hi guys"  }   )
});


// to send data in  post request-> prefer sending in BODY -> click body-raw-json
router.post('/test-post2', player.playersLists);



module.exports = router;
