const jwt = require("jsonwebtoken");
const Config = require("../../config/config");
const UserService = require("../services/user.service");
let user_svc = new UserService();

const auth = async(req, res, next) => {
    try{
        let token = null;
        // console.log(req.header)
        if(req.headers['authorization']){
            token = req.headers['authorization'];
        } else if(req.headers['x-xsrf-token']){
            token = req.headers['x-xsrf-token'];
        } else if(req.query['token']){
            token = req.query['token'];
        }
        if(token === null){
            next({status: 401, msg: "Token not provided"})
        } else {
            let str_split = token.split(' ');
            token = str_split.pop();

            if(token === null){
                next({status: 401, msg: "Token not provided"})
            } else{
                let data = jwt.verify(token, Config.JWT_SECRET);
                
                let auth_user = await user_svc.getUserById(data.user_id);
                if(auth_user){
                    req.auth_user = auth_user;
                    next();
                } else {
                    next({status: 401, msg:"Token/Payload invalid"})
                }
            }
        }
    } catch(excep) {
        console.log("Auth: ", excep);
        next({status: 401, msg: excep})
    }
}

module.exports = auth;