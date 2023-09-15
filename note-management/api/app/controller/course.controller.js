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

            data.title = slugify(data.description, {
                lower: true
            });

            if(!data.description || data.description === 'null'){
                data.description = null;
            }
            
            this.course_svc.courseValidate(data);
            let response = await this.course_svc.createCourse();
            res.json({
                result: response,
                msg: "Course created successfully",
                status: true
            })

        } catch (except) {
            console.log("CourseStore: ", except);
            next({status: 400, msg: except})
        }
    }

    getCourse = async(req, res, next) => {
        try {
            let paginate = {
                total_count: await this.course_svc.getAllCounts(),
                per_page: (req.query.per_page) ? parseInt(req.query.per_page) : 10,
                current_page: req.query.page ? parseInt(req.query.page) : 1
            };
            let skip = (paginate.current_page-1) * paginate.per_page;
            let data = await this.course_svc.getCourse(skip, paginate.per_page);
            res.json({
                result: data,
                status: true,
                paginate: paginate,
                msg: "data fetched"
            })
        } catch (except) {
            console.log("List course: ", except)
            next({
                status:400,
                msg: except 
            })
        }
    }

    getCourseById = async (req, res, next) => {
        try {
            let data = await this.course_svc.findById( req.params.id)
            if(data){
                res.json({
                    result: data,
                    status: true,
                    msg: "Data fetched"
                })
            } else {
                next({status: 404, msg: "Data doesn't exist"})
            }
        } catch (except) {
            console.log("Fetch by id: ", except);
            next({
                status: 400,
                msg:except
            })
        }
    }

    deleteById = async (req, res, next) => {
        try {
            let data = await this.course_svc.deleteById(req.params.id)
            if(data){
                res.json({
                    result: data,
                    status: true,
                    msg: "Data deleted"
                })
            } else {
                next({status: 404, msg: "Data doesn't exist"})
            }
        } catch (except) {
            console.log("Fetch by id: ", except);
            next({
                status: 400,
                msg:except
            })
        }
    }

    courseUpdate = async(req, res, next) => {
        try {
            let current_data = await this.course_svc.findById(req.params.id);

            let data = req.body;
            if(req.file){
                data.file = req.file.filename;
            } else {
                data.file = current_data.file;
            }
            console.log(data.file);

            data.description = current_data.description ?? null ;
            
            this.course_svc.courseValidate(data);
            let response = await this.course_svc.updateCourse(req.params.id);
            res.json({
                result: response,
                msg: "Course updated successfully",
                status: true
            })

        } catch (except) {
            console.log("updateCourse: ", except);
            next({status: 400, msg: except})
        }
    }
}

module.exports = CourseController;