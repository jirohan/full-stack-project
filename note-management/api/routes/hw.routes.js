const auth = require("../app/middleware/auth.middleware");
const { isStudent } = require("../app/middleware/rbac.middleware");
const uploader = require("../app/middleware/uploader.middleware");

const router = require("express").Router();

router.post("/hw", auth, isStudent, uploader.single('file'))

module.exports = router;