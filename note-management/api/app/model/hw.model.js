const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const HwSchemaDef = new mongoose.Schema({
    description: String,
    img: {
        data: Buffer,
        contentType: String
    },
    status: commonSchema.statusSchema,
    created_at: commonSchema.created_by
}, commonSchema.trigger);

const HwModel = mongoose.model("Homework", HwSchemaDef);

module.exports = HwModel;
