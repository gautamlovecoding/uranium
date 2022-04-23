const jwt = require('jsonwebtoken')

let mid1 = async function(req, res, next){
  try{
    let token = req.headers['x-Auth-token'];
  if(!token) token = req.headers['x-auth-token'];

  if (!token) return res.status(400).send( { status: false, msg: "token must be present"});

  let decodedToken = jwt.verify(token, "functionup-Uranium");
   /*not execote it will throw an error and catch into catch block*/
  // if (!decodedToken)
  //   return res.status(400).send({ status: false, msg: "token is not valid" });

    let userToBeModified = req.params.userId
  let userLoggedIn = decodedToken.userId


  if(userToBeModified != userLoggedIn) return res.status(403).send({status:false, msg: "Not allowed to logeed in requested other users data."})

    next();
  }
  catch(error){
    res.status(500).send({msg: "Error", error: error})
  }
}

module.exports.mid1 = mid1