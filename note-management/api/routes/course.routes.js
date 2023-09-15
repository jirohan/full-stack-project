const auth = require("../app/middleware/auth.middleware");
const { isAdminTeacher } = require("../app/middleware/rbac.middleware");
const uploader = require("../app/middleware/uploader.middleware");
const CourseController = require("../app/controller/course.controller");
const course_ctrl = new CourseController();

const router = require("express").Router();

router.route("/")
    .get(course_ctrl.getCourse)
    .post( auth, isAdminTeacher, uploader.single('file'), course_ctrl.courseStore)

router.route("/:id")    
    .get( course_ctrl.getCourseById)
    .delete( auth, isAdminTeacher, course_ctrl.deleteById)
    .put( auth, isAdminTeacher, uploader.single("file"), course_ctrl.courseUpdate)    

module.exports = router;