const express = require('express');
const logger = require('./logger')

const router = express.Router();

/*******************Q 1.***********************/

router.get('/movies', function (req, res) {
    let movieList = ["pushpa","Titanic","Captain America","john snow"];
    res.send(movieList);
});


/*******************Q 2.***********************/
router.get('/movies/:indexNumber', function (req, res) {
    let movieList = ["pushpa","Titanic","Captain America","john snow"];
    let 
    if(all<movieList.length){
        res.send(movieList[all])
        
/*******************Q 3.***********************/
    }else{all = req.params.indexNumber
        res.send("Please use a valid index")
    }
    
});

/*******************Q 4.***********************/
router.get('/films', function (req, res) {
    let fullFilms = 
    [ 
        {
        "id": 1,
        "name": "pushpa"
       },
       {
        "id": 2,
        "name": "Incendies"
       },
       {
        "id": 3,
        "name": "Rang de Basanti"
       },
       {
        "id": 4,
        "name": "Finding Nemo"
       }
    ];

    res.send(fullFilms);
    
});


/*******************Q 5.***********************/
router.get('/films/:filmid', function (req, res) {

    let fullFilms = 
    [ 
        {
            "id": 1,
            "name": "The Shining"
        },
        {
            "id": 2,
            "name": "Titanic"
        },
        {
            "id": 30,
            "name": "Rang de Basanti"
        },
        {
            "id": 4,
            "name": "Finding Nemo"
        }
    ];
    
    let getFilms = req.params.filmid
    let inc = 0;
    for (i=0; i<fullFilms.length; i++){
        if(fullFilms[i].id == getFilms){
            res.send(fullFilms[i])
        }else{
            inc +=1;
        }
    }
    if (inc>0){
        res.send("No movie exist with this id.")
    }
    
});




module.exports = router;
// adding this comment for no reason