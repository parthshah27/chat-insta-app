
const mongoose = require("mongoose");
const chatSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    message: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    timestamp_ms: {
        type: String
    }
});
const Message = new mongoose.model("insta_messages", chatSchema);
module.exports = Message;

