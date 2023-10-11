const express = require("express");
const app = express();

const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());
app.options('*', cors());

const routes = require("./routes/index");

//middleware
require('dotenv/config');

app.use(bodyParser.json());

//routes
app.use(routes);

//Database
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