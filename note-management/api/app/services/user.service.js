const Joi = require("joi")

class UserService{
    validateUser = (data) => {
        try {
            let userSchema = Joi.object({
                name: Joi.string().min(3).required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(8).required(),
                faculty: Joi.string().required(),
                id: Joi.number().required(),
                role: Joi.string().required(),
                address: Joi.string(),
                phone: Joi.string()
            })
            let response = userSchema.validate(data);
            if(response.error){
                throw response.error.details[0].message
            }
        } catch (err) {
            console.log(err);
            throw err;
        }
    }

}

module.exports = UserService;