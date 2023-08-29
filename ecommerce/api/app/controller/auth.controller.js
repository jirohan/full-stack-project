const { SMTP } = require("../../config/config");
const UserService = require("../services/user.service")
const nodemailer = require("nodemailer");
const {MongoClient } = require("mongodb");

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

    loginUser = (req, res, next)=>{
        let body = req.body;

        res.json({
            result: body,
            status: true,
            msg: "Received"
        })
    }

    logoutUser = (req, res, next)=> {

    }

    changePwd = (req, res)=> {

    }
}

module.exports = AuthController;