module.exports = (app) => {
    const Message = require("../Controllers/messageController.js");

    app.post("/message", Message.store);

    /*app.get("/get-all", App.findAll);

    app.get("/message/:messageId", App.findOne);

    app.put("/message/:messageId", App.update);

    app.delete("/message/:messageId", App.delete);*/
};