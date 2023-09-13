const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const CourseSchemaDef = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    file: {
        type: String,
        required: true
    },
    instructor: {
        type: String,
        required: true
    },
    status: commonSchema.statusSchema,
    created_at: commonSchema.created_by
}, commonSchema.trigger);

const CourseModel = mongoose.model("Course", CourseSchemaDef);

module.exports = CourseModel;
