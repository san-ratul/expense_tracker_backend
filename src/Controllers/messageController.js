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