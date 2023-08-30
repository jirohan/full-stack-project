const UserService = require("../services/user.service");
const {MongoClient} = require("mongodb");

class AuthController {
    constructor(){
        this.user_svc = new UserService();
    }
    loginUser = (req, res, next)=>{
        let validation_flag = false;
        if(!validation_flag){
            next({status: 400, msg:"Credentials does not match"})
        } else{
            res.json({
                result: null, 
                status: true,
                msg: "Logged in successful"
            })
        }
    }

    registerUser = async(req, res, next)=>{
        try {
            let body = req.body;

            this.user_svc.validateUser(body);
        
            let client = await MongoClient.connect("mongodb://localhost:27017")
            let db = client.db("note-management");

            let data = await db.collection("test").insertOne(body);

            res.json({
                result: body,
                status: true,
                msg:"Register data test"
            })
        } catch (excep) {
            next({status: 400, msg:excep})
        }
    }
}

module.exports = AuthController;