const Message = require('../Model/message');

//store method for message model
exports.store = (req, res) => {
    const msg = new Message({
        message: req.body.message,
    })

    msg
        .save()
        .then ( data => {
            res.send(data);
        })
        .catch( err => {
            res.status(500).send({
                message: err.message || "Something went wrong!",
            })
        })
}

/*
* returns all messages
*/
exports.index = async (req, res) => {
    let messages = [];
    messages = await Message.find();
    res.status(200).send({
        data: messages,
    })
}

/*
* returns single message based on _id
* params _id
*/
exports.show = async (req, res) =>{
    let id = req.params.messageId;
    if(!id) {
        res.status(400).send({
            message : "ID is required!"
        });
    }
    let message = await Message.findById(id) ?? {};
    res.status(200).send({
        data : message
    });
}