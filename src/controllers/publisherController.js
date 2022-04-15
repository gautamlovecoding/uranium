const publisherModel = require('../model.js/publisherModel');

const createNewPublisher = async function(req, res){
    const publisher = req.body
    const publisherCreated = await publisherModel.create(publisher);
    res.send({msg: publisherCreated});
}

module.exports.createNewPublisher = createNewPublisher;