const express = require("express");
const app = express();
const routes = require("./routes/");

app.use(express.json())
app.use(express.urlencoded({
    extended: false
}))

//mounting of routes
app.use(routes);

// 404 handling
app.use((req, res, next)=> {  
    next({
        status: 404, 
        msg: "not found"
    });
});

//error handling middleware
app.use((error, req, res, next) => {
    let status = error.status ?? 500;
    let msg = error.msg ?? error;
    res.status(status).json({
        result: null,
        status: false,
        msg: msg
    })
})

app.listen(3005, 'localhost', (err) => {
    if(!err) {
        console.log("Server is listening to port 3005");
        console.log("Press CTRL + C to disconnect to the server...")
    }
})