const Joi = require("joi");
const UserModel = require("../model/user.model")

class UserService{
    validateUser = (data) => {
        try {
            let userSchema = Joi.object({
                name: Joi.string().min(3).required(),
                email: Joi.string().email().required(),
                password: Joi.string().min(8).required(),
                role: Joi.string().required(),
                dateOfBirth: Joi.string(),
                phoneNumber: Joi.string(),
                address: Joi.string(),
                gender: Joi.string()
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

    createUser = async (data) => {
        try {
            let user_obj = new UserModel(data);
            return await user_obj.save();
        } catch (excep) {
            if(excep.code === 11000){
                let keys = Object.keys(excep.keyPattern);
                throw keys.join(", ")+" should be unique"
            } else{
                throw excep
            }
        }
    }

    getUserByEmail = async(data) => {
        try {
            let result = await UserModel.findOne({
                email: data.email
            })
            return result;
        } catch (err) {
            throw err;
        }
    }

    getUserById = async(id) => {
        try {
            let user = await UserModel.findById(id);
            return user;
        } catch (err) {
            throw err;
        }
    }

}

module.exports = UserService;