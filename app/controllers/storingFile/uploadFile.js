const multer = require('multer');
const upload = multer({dest:'uploads/'});

const upLoadFile = (req,res,next) => {
    try{
        console.log(req.file)
        next()
    }catch(err){
        console.log(err)
    }
}

module.exports = upLoadFile