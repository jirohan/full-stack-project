const { SMTP } = require("../../config/config");
const UserService = require("../services/user.service")
const nodemailer = require("nodemailer");

class AuthController{
    constructor(){
        this.user_svc = new UserService();
    }
    registerUser = async(req, res, next)=>{
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
            let transporter = nodemailer.createTransport({
                host: SMTP.HOST,
                port: SMTP.PORT,
                secure: SMTP.TLS,
                auth: {
                    user: SMTP.USER,
                    pass: SMTP.PASS
                }
            });

            let mail_response = await transporter.sendMail({
                to: body.email,
                from: SMTP.FROM,
                attachments: [
                    {
                        filename: 'Image.jpeg',
                        path: "http://localhost:3005/assets/1693218607604-Untitled design.png"
                    }
                ],
                subject: "Account Register",
                text: "Dear" +body.name+ ", Your account has been registered.",
                html: `<b>Dear ${body.name}</b>, <br></br><p>Your account has been registered.<img src='http://localhost:3005/assets/public/1693218607604-Untitled design.png' /></p>`
            });

            res.json({
                //email verification 
                    //email data, unique
                result: body,
                status: true,
                msg: "Received"
            })
        }
            catch (excp) {
                console.log(excp);
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