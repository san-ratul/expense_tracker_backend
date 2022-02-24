const Message = require("../Controllers/messageController");
module.exports = (app) => {
    const Message = require("../Controllers/messageController.js");

    app.post("/message", Message.store);

    app.get("/message", Message.index);
    //
    app.get("/message/:messageId", Message.show);
    //
    // app.put("/message/:messageId", App.update);
    //
    // app.delete("/message/:messageId", App.delete);
};