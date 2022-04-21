const UserModel= require("../models/userModel")



const createUser = async function(req, res) {
    let userData = req.body
    let saveData = await UserModel.create(userData)
    res.send({msg: saveData})
}
    

module.exports.createUser= createUser
