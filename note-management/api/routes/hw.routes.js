const auth = require("../app/middleware/auth.middleware");
const { isStudent, isAdminTeacher } = require("../app/middleware/rbac.middleware");
const uploader = require("../app/middleware/uploader.middleware");
const HwController = require("../app/controller/hw.controller");
const hw_ctrl = new HwController();

const router = require("express").Router();

router.post("/hw", auth, isStudent, uploader.single('file'))
router.get("/hw", auth, isAdminTeacher, hw_ctrl.getHw)

module.exports = router;