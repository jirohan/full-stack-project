const UserService = require("../services/user.service");
const {MongoClient} = require("mongodb");
const bcrypt = require("bcrypt");
const Config = require("../../config/config");
const jwt = require("jsonwebtoken");

class AuthController {
    constructor(){
        this.user_svc = new UserService();
    }

    registerUser = async(req, res, next)=>{
        try {
            let body = req.body;

            this.user_svc.validateUser(body);
            
            body.password = bcrypt.hashSync(body.password, 10)
            let data = await this.user_svc.createUser(body);

            res.json({
                result: data,
                status: true,
                msg:"Register data test"
            })
        } catch (excep) {
            console.log(excep);
            next({status: 400, msg:excep})
        }
    }

    loginUser = async(req, res, next)=>{
        try {
             let data = req.body;
             let loggedInUser = await this.user_svc.getUserByEmail(data);
             if(loggedInUser){
                if(bcrypt.compareSync(data.password, loggedInUser.password)){
                    let token = jwt.sign({
                        user_id: loggedInUser._id
                    }, Config.JWT_SECRET);
                    
                    res.json({
                        result: {
                           user: loggedInUser,
                           access_token: token
                        },
                        status: true,
                        msg: "Logged in successful"
                    })
                } else {
                    next({status:400, msg: "Password doesn't match" })
                }
             } else {
                 next({status: 400, msg: "Credentials doesn't match"})
             }
        } catch (excepts) {
             console.log("Login: ", excepts);
             next({status:400, msg: JSON.stringify(excepts) })
        }
     }

     logoutUser = (req, res, next)=> {

     }

     getLoggedInUser = (req, res, next) =>{
        res.json({
            result: req.auth_user,
            status: true,
            msg: "Your PROFILE..."
        })
     }
}

module.exports = AuthController;