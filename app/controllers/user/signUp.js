const users = require('../../models/user');
const userRequestValidation = require('../../helpers/userValidator');
const { jwtSign } = require('../../middlewares/authenticateUser');

const addUser = async (req,res) => {
    await userRequestValidation(req.body);
    let token
    const user = new users({
        name : req.body.name,
        email : req.body.email,
        token : jwtSign(req.body.email),
        password : req.body.password
    })
    await user.save((err) => {
        if(err){
            console.log(err)
        }
    });
    console.log(user)
    res.status(200).send({
        message : "Sucessfully Registered",
        token:token
    })
}

module.exports = addUser;