const AuthorModel= require("../model.js/authorModel")

const createnewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}


module.exports.createnewAuthor= createnewAuthor
