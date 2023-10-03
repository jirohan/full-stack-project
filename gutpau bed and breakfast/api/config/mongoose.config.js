const mongoose = require("mongoose");

let DB_URL = "mongodb+srv://gbb:n3x3OsTRWfswy241@cluster0.ezzkjqq.mongodb.net/rooms"

mongoose.set('strictQuery', false)
mongoose.connect(DB_URL)
    .then(() => {
        console.log("Connected to Database successfully...")
    })
    .catch((err) => {
        console.log('Failed to connect the DB', err);
    })