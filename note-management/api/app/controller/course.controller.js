const slugify = require("slugify");
const CourseService = require("../services/course.service");

class CourseController{
    constructor(){
        this.course_svc = new CourseService();
    }
    courseStore = async(req, res, next) => {
        try {
            let data = req.body;
            if(req.file){
                data.file = req.file.filename;
            }

            if(!data.description || data.description == "null"){
                data.description = slugify(data.title, {
                    lower: true
                });
            }
            this.course_svc.courseValidate(data);
            let response = await this.course_svc.createCourse();
            res.json({
                result: response,
                msg: "Created Successfully",
                status: true
            })
        } catch (except) {
            console.log("CourseStore: ", except);
            next({status: 400, msg: except})
        }
    }
}

module.exports = CourseController