const auth = require("../app/middleware/auth.middleware");
const { isAdminTeacher } = require("../app/middleware/rbac.middleware");
const uploader = require("../app/middleware/uploader.middleware");
const CourseController = require("../app/controller/course.controller");
const course_ctrl = new CourseController();

const router = require("express").Router();

router.post("/assignhw", auth, isAdminTeacher, uploader.single('file'), course_ctrl.courseStore)

module.exports = router;