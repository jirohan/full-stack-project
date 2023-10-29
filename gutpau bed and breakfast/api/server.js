const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

require("./config/mongoose.config");

const routes = require("./routes/index");

app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

app.use(routes);

//error handling middleware
app.use((err, req, res, next)=> {
    const errorStatus = err.status || 500
    const errorMessage = err.message || "something went wrong!"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        message: errorMessage,
    })

})

const port = process.env.PORT || 8800;

app.listen(port, () => console.log(`Server is running on port ${port}`));