const Joi = require("joi")
const HwModel = require("../model/hw.model");

class HwService{
    hwValidate = (data) => {
        let schema = Joi.object({
            title: Joi.string().required().min(2),
            description: Joi.string(),
            file: Joi.string().required(),
            instructor: Joi.string().required(),
            status: Joi.string().valid("active", "inactive").default("active")
        });
        let response = schema.validate(data);
        if(response.error){
            throw response.error.details[0].message
        } else {
            this.data = data;
        }
    }

    createHw = async() => {
        let category_obj = new HwModel(this.data);
        return await category_obj.save();
    }

    getAllCounts = async() => {
        let all_data = await HwModel.find()
        return all_data.length;
    }

    getHw = async(skip, limit) => {
        return await HwModel.find()
            .skip(skip)
            .limit(limit);
    }

    findById = async(id) => {
        return await HwModel.findById(id)
    }
    
    deleteById = async(id) => {
        return await HwModel.findByIdAndDelete(id);
    }

    updateHw = async(id) => {
        let status = await HwModel.findByIdAndUpdate(id, {
            $set: this.data
        })
        return status;
    }
}

module.exports = HwService;