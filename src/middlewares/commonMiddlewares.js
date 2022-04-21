


const mid1= function ( req, res, next) {
    // console.log("Hi I am a middleware named Mid1")
    let header = req.headers['isfreeappuser']

    if (header) { 
        next ();
    }
    else {
        res.send ("The request is missing a mandatory header")
    }
}


const mid2= function ( req, res, next) {
    // console.log("Hi I am a middleware named Mid2")
    let header = req.headers['isfreeappuser']

    if (header) { 
        next ();
    }
    else {
        res.send ("The request is missing a mandatory header")
    }
}

module.exports.mid1= mid1
module.exports.mid2= mid2
