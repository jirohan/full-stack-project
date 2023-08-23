const Joi = require("joi");

class UserService {
    validateUser = (data) => {
       try{
        let userSchema = Joi.object({
            name: Joi.string()
                .min(3)
                .required(),
            email: Joi.string()
                .email()
                .required(),
            password: Joi.string()
                .min(8)
                .required(),
            address: Joi.string(),
            role: Joi.string()
                .required(),
            status: Joi.string()
                .required()
           })
           let response = userSchema.validate(data);
           console.log(response);
           if(response.error){
            throw response.error
           }
       } catch(err){
            console.log(err);
            throw err;
       }
    }
}   

module.exports = UserService;