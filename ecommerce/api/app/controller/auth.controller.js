const UserService = require("../services/user.service")

class AuthController{
    constructor(){
        this.user_svc = new UserService();
    }
    registerUser = (req, res, next)=>{
        //Form develop --> React
        //Data entry --> User -> Form
        //Submission of the form --> /register route of BE Post
        try {
            let body = req.body;

            if(req.file){
                body.image = req.file.filename
            }
        //file handle
        //validation
        //DB Query
        //Store - Response

        //custom validation 
        //package

        //user svc
            this.user_svc.validateUser(body);
            //DB store ==> status --> inactive
            //act_token ---> random string
            //email send --> url --> act_token
            //FE url click --> FE ---> Req Be URL Token

            res.json({
                //email verification 
                    //email data, unique
                result: body,
                status: true,
                msg: "Received"
            })
        }
            catch (excp) {
                next({
                    status: 400,
                    msg: excp
                })
            }
        }

    loginUser = (req, res, next)=>{
        // TODO: Valdiation, Modeling, DB Query,  
        // let validation_flag = true;
        // if(!validation_flag){
        //     next({status: 400, msg: "credential doesn't match"})
        //     // res.status(400).json({
        //     //     result: null,
        //     //     status: false,
        //     //     msg: "Credential doesnt match"
        //     // });
        // } else{
        //     res.json({
        //         result: null,
        //         status: true,
        //         msg: "Login Success"
        //     });
        // }
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