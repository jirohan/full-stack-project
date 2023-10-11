const express = require("express");
const app = express();
const connectDB = require("./db/connect")

const PORT = process.env.PORT || 5000;

const dotenv = require("dotenv");
dotenv.config();

const start = async()=> {
    try{
        app.listen(PORT, ()=>{
            console.log("Backend is Running...");
        })
        await connectDB();

    } catch (error){
        console.log(error);
    }
};

start();


