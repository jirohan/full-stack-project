const { SMTP } = require("../../config/config");
const UserService = require("../services/user.service")
const nodemailer = require("nodemailer");
const {MongoClient } = require("mongodb");
const bcrypt = require("bcrypt");

class AuthController{
    constructor(){
        this.user_svc = new UserService();
    }
    registerUser = async(req, res, next)=>{
        try {
            let body = req.body;

            if(req.file){
                body.image = req.file.filename
            }
            this.user_svc.validateUser(body);

            body.password = bcrypt.hashSync(body.password, 10)
            let data = await this.user_svc.createUser(body);

            res.json({
                result: body,
                status: true,
                msg: "Register data test"
            })
        }
            catch (excep) {
                console.log(excep);
                next({
                    status: 400,
                    msg: excep
                })
            }
    }

    loginUser = async(req, res, next)=>{
        try {
            let data = req.body;
            let loggedInUser = await this.user_svc.getUserByEmail(data);
            if(loggedInUser){
                if(bcrypt.compareSync(data.password, loggedInUser.password)){
                    res.json({
                        result: loggedInUser,
                        status: true,
                        msg: "Logged in Success"
                    })
                } else {
                    next({status: 400, msg: "Password doesn't match"})
                }
            } else{
                next({status: 400, msg: "Credentials doesn't match"})
            }
        } catch (excep) {
            console.log("Login", excep);
            next({status: 400, msg: JSON.stringify(excep)})
        }
    }

    logoutUser = (req, res, next)=> {

    }

    changePwd = (req, res)=> {

    }
}

module.exports = AuthController;