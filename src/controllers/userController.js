const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (req, res) {
  try{
    let data = req.body;
    if(Object.keys(data).length != 0){
      let savedData = await userModel.create(data);
      res.status(201).send({ msg: savedData });
    }
    else res.status(400).send({msg: "Bad Request"})
  }
  catch(error){
    res.status(500).send({msg: "Error", error: error.message})
  }


};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let checkUser = await userModel.findOne({ emailId: userName, password: password });
  if (!checkUser)
    return res.status(401).send({
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
  // res.setHeader("x-auth-token", token);
  res.status(200).send({ status: true, data: token });
  }
  catch(error){
    res.status(500).send({msg: "Error", error: error.message})
  }
};

const getUserData = async function (req, res) {

  try{

  let userId = req.params.userId;
  let userDetails = await userModel.findById(userId);
  if (!userDetails)
    return res.status(400).send({ status: false, msg: "No such user exists" });

  res.status(200).send({ status: true, data: userDetails });
  }
  catch{
      res.status(500).send({msg: "Error", error: error.message})
  }
};


const updateUser = async function (req, res) {
try{
  let userId = req.params.userId;
  let user = await userModel.findById(userId);
  //Return an error if no user with the given id exists in the db
  if (!user) {
    return res.status(400).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: userId }, userData, {new:true});
  res.status(200).send({ status: true, data: updatedUser });
}
catch{
  res.status(500).send({msg: "Error", error: error.message})
}

};


const deleteUser = async function(req, res){
  try{
    let userId = req.params.userId;
    let user = await userModel.findById(userId)

    if(!user) {
      return res.status(400).send({msg: 'no such user exists'});
    }

    let deleteUser = await userModel.findOneAndUpdate({_id: userId}, {isDeleted: true}, {new: true})
    res.status(200).send({ status:true, data: deleteUser})
  }
  catch(error){
    res.status.send({msg:"Error", error: error.message})
  }
}

module.exports.createUser = createUser;
module.exports.loginUser = loginUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
