const multer = require("multer");

exports.multerFunction = (destination,fieldName) =>{
    return multer({
        storage: multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, destination)
            },
            filename: function (req, file, cb) {
                const uniquePrefix = Date.now() + '-' + Math.round(Math.random() * 1E9)
                cb(null, uniquePrefix + '-' + file.originalname)
            }
        })
    }).single(fieldName);
}