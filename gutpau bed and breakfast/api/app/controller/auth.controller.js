const User = require("../model/user.model.js")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken");
const createError = require('http-errors');
const Config = require("../../config/config.js");

exports.register = async(req, res, next)=>{
    try {
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).send("Username, email, and password are required");
          }
          
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash,
        })

        await newUser.save();
        res.status(200).send("User has been created")
        
    } catch (err) {
        next(err)
        console.log(err);
        return;
    }
}

exports.login = async(req, res, next)=>{
    try {
        const user = await User.findOne({email: req.body.email})
        if(!user) return next(createError(404, "User not found!"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password);
        if(!isPasswordCorrect) return next(createError(400, "Wrong Password!"))

        const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, Config.JWT_SECRET);

        const {password, isAdmin, ...otherDetails} = user._doc;
        res.cookie("access_token", token, {
            httpOnly: true,
        })
        .status(200)
        .json({...otherDetails});
        
    } catch (err) {
        next(err)
        console.log(err);
        return;
    }
}