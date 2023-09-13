const mongoose = require("mongoose");

const UserSchemaDef = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    }, 
    role: {
        type: String, 
        enum: ["admin", "student", "teacher", "parent"],
        default: "student"
    },
    dateOfBirth: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    address: {
        street: String,
        city: String,
        state: String,
        country: String
    },
    gender: {
        type: String
    },
    created_by: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        default: null
    }
},{
    autoCreate: true,
    autoIndex: true,
    timestamps: true
});

const UserModel = mongoose.model("User", UserSchemaDef);

module.exports = UserModel;
