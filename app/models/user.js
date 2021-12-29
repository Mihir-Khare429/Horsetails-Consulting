const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const md5 = require('md5');
const userAuthentication = require('../middlewares/authenticateUser');
const validator = require('validator');

const userSchema = new Schema({
    name : {
        type: String,
        trim: true,
        required : [true,"Name is a required Field"]
    },
    email:{
        type: String,
        trim : true,
        required : [true,"Email is an required Field!"],
        unique : [true,"Email Already exists. Try Forget Password"],
        validate : [{
            validator : (value) => {
                return !validator.isEmpty(value)
            },
            message : "Email should not be Empty"
        },
        {
            validator : (value) => {
                return validator.isEmail(value)
            },
            message : "Email is in Invalid Format"
        }
    ]},
    password : {
        type : String,
        required : [true,"Password is a required Field"],
        minLength : [8,"Password should be 8 or more characters long"]
    },
    token : {
        type : String,
        trim : true
    }
})

userSchema.pre('save',async function(next){
    const user = this
    user.password = await md5(user.password);
    next()
})

module.exports = mongoose.model('user',userSchema);