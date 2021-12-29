const Users = require('../../models/user');
const validator = require('validator');
const md5 = require('md5');
const { jwtSign } = require('../../middlewares/authenticateUser');

const userSignIn = async (req,res) => {
    const body = req.body
    let email,password,token
    if(!validator.isEmpty(body.email) && validator.isEmail(body.email) && !validator.isEmpty(body.password)){
        email = body.email
        password = body.password
        const user = await Users.findOne({email:email});
        if(!user){
            return res.status(404).send({
                message : "No User Found. Please SignUp"
            })
        }
        const hashed_pass = md5(password)
        if(hashed_pass == user.password){
            token = jwtSign(email,user._id)
            await Users.findOneAndUpdate({email:email},{token:token})
            return res.status(200).send({
                message : "Signed In Sucessfully",
                token:token
            })
        }else{
            return res.status(401).send({
                message : "Invalid Credentials"
            })
        }
    }
}

module.exports = userSignIn