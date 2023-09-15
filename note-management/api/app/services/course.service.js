const Joi = require("joi")
const CourseModel = require("../model/course.model");

class CourseService{
    courseValidate = (data) => {
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

    createCourse = async() => {
        let category_obj = new CourseModel(this.data);
        return await category_obj.save();
    }

    getAllCounts = async() => {
        let all_data = await CourseModel.find()
        return all_data.length;
    }

    getCourse = async(skip, limit) => {
        return await CourseModel.find()
            .skip(skip)
            .limit(limit);
    }

    findById = async(id) => {
        return await CourseModel.findById(id)
    }
    
    deleteById = async(id) => {
        return await CourseModel.findByIdAndDelete(id);
    }

    updateCourse = async(id) => {
        let status = await CourseModel.findByIdAndUpdate(id, {
            $set: this.data
        })
        return status;
    }
}

module.exports = CourseService;