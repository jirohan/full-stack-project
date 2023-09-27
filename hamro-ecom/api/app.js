const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");

//middleware
require('dotenv/config');

app.use(bodyParser.json());
const api = process.env.API_URL;
const productRouter = require('./routes/product.routes');

app.use(`${api}/products`, productRouter)

const Product = require("./app/models/product.model")


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,

})
.then(()=>{
    console.log('Database Connection is ready...')
})
.catch((err)=> {
    console.log(err)
})

app.listen(3000,'localhost', () => {
    console.log("Server is running in port 3000...");
    console.log("Press CTRL + C to disconnect from server...")
})