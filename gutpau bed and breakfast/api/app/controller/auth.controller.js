const User = require("../model/user.model.js")

exports.register = async(req, res, next)=>{
    try {

        if (!req.body.username || !req.body.email || !req.body.password) {
            return res.status(400).send("Username, email, and password are required");
          }
          
        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: req.body.password,
        })

        await newUser.save();
        res.status(200).send("User has been created")
        
    } catch (err) {
        next(err)
        console.log(err);
    }
}