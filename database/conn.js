const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://parthshah07:wbkm56Dd6S8K9Une@cluster0.6pdlr.mongodb.net/test", {
    useNewUrlParser: true
}).then(() => {
    console.log("MongoDB connected");
}).catch((e) => {
    console.log("MongoDB not connected");
    console.log(e);
})
