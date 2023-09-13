const mongoose = require("mongoose");
const commonSchema = require("./common.schema");

const LabelSchemaDef = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    link: String,
    image: {
        type: String,
        required: true
    },
    status: commonSchema.statusSchema

}, commonSchema.trigger)

const LabelModel = mongoose.model("Label", LabelSchemaDef);