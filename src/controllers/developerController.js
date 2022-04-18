const batchModel = require("../models/batchModel")
const developerModel= require("../models/developerrModel")

const createDeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developerModel.create(developer)
    res.send({data: developerCreated})
}

const scholarshipDevloper = async function(req, res) {
    let listDeveloper = await developerModel.find( { $and: [{gender: "female"}, { percentage:{$gte : 70}}]})
    // console.log(listDeveloper);
    res.send ({msg: listDeveloper});

}

const getDev = async function(req, res){
    let batchName = req.query.program
    let percent = req.query.percentage
    
    const idDetails = await batchModel.find({name: batchName}).select({_id:1})
    const data = await developerModel.find({batch: idDetails, percentage: {$gte: percent}}).populate("batch")
    res.send(data)

}



module.exports.createDeveloper= createDeveloper;

module.exports.scholarshipDevloper= scholarshipDevloper;

module.exports.getDev= getDev;
