const mongoose = require("mongoose");
const {ENVIRONMENT, DB} = require("./config"); 
let DB_URL = "";
        if (ENVIRONMENT === "dev"){
            DB_URL = DB.PROTOCOL+"://"+DB.HOST+":"+DB.PORT;
        } else if (ENVIRONMENT === "prod"){
            DB_URL = DB.PROTOCOL+"://"+DB.USER+":"+DB.PWD+"@"+DB.HOST+":"+DB.PORT;
        }

mongoose.set('strictQuery', false)            
mongoose.connect(DB_URL)
    .then(() => {
        console.log('Connected to DB successfully....');
    })
  .catch((err) => {
        console.error('Failed to connect to DB', err);
  });
