const multer = require("multer");

const myStorage = multer.diskStorage({
    destination: (req, res, next) => {
        let path = "public/";
        next(null, path);
    },
    filename: (req, file, next) => {
        let file_name = Date.now()+"-"+file.originalname;
        next(null, file_name)
    }
});

const fileFilter = (req, file, next) => {
    let allowed = ["pdf", "jpeg", "jpg", "png"];
    let fileparts = file.originalname.split(".");
    let ext = fileparts.pop();

    if(allowed.includes(ext.toLowerCase())){
        next(null, true);
    } else{
        next({status: 400, msg: "File format not supported"},
        )
    }
}

const uploader = multer({
    storage: myStorage,
    fileFilter: fileFilter,
    limits: {
        fileSize: 5000000
    }
});

module.exports = uploader;