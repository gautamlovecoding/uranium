const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  let data = req.body;
  let savedData = await userModel.create(data);
  console.log(req.newAtribute);
  res.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let checkUser = await userModel.findOne({ emailId: userName, password: password });
  if (!checkUser)
    return res.send({
      status: false,
      msg: "Either username or the password is incorrect",
    });
// generate tokens
  let token = jwt.sign(
    {
      userId: checkUser._id.toString(),
      batch: "Uranium",
      organisation: "FunctionUp",
    },
    "functionup-Uranium"  //secretKey
  );
  res.setHeader("x-auth-token", token);
  res.send({ status: true, data: token });
};

const getUserData = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  // //If no token is present in the request header return error. 
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // let decodedToken = jwt.verify(token, "functionup-Uranium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: userDetails });
};


const updateUser = async function (req, res) {
  // let token = req.headers["x-Auth-token"];
  // if (!token) token = req.headers["x-auth-token"];

  // //If no token is present in the request header return error. 
  // if (!token) return res.send({ status: false, msg: "token must be present" });

  // let decodedToken = jwt.verify(token, "functionup-Uranium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.send({ status: true, data: updatedUser });
};


const deleteUser = async function(req, res){
  // let token = req.headers['x-Auth-token'];
  // if(!token) token = req.headers['x-auth-token'];

  // if (!token) return res.send( { status: false, msg: "token must be present"});

  // let decodedToken = jwt.verify(token, "functionup-Uranium");
  // if (!decodedToken)
  //   return res.send({ status: false, msg: "token is invalid" });

    let userId = req.params.userId;
    let user = await userModel.findById(userId)

    if(!user) {
      return res.send({msg: 'no such user exists'});
    }

    let deleteUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
    res.send({ status:true, data: deleteUser})
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
