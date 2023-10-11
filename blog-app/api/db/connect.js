const mongoose = require("mongoose");

uri = "mongodb+srv://Rohan:Rohan@cluster0.ezzkjqq.mongodb.net/blogapp?retryWrites=true&w=majority";

const connectDB = () => {
    return mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

module.exports = connectDB;