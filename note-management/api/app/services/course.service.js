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
        let course_obj = new CourseModel(this.data);
        return await course_obj.save();
    }
}

module.exports = CourseService;