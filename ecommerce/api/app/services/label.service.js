const Joi = require("joi")
const LabelModel = require("../model/label.model");

class LabelService{
    storeValidate = (data) => {
        let schema = Joi.object({
            title: Joi.string().required().min(2),
            link: Joi.string(),
            image: Joi.string(),
            type: Joi.string().valid("brand", "banner"),
            status: Joi.string().valid("active", "inactive").default("active")
        });
        let response = schema.validate(data);
        if(response.error){
            throw response.error.details[0].message
        } else {
            this.data = data;
        }
    }

    createLabel = async() => {
        let label_obj = new LabelModel(this.data);
        return await label_obj.save();
    }
}

module.exports = LabelService;