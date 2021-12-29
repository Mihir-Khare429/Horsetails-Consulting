const yup = require('yup');

const userSchema = yup.object().shape({
    name : yup.string().required(),
    email : yup.string().email().required(),
    password : yup.string().required()
})

const userValidator = async (userData) => {
    let name,email,password;
    userData.name?(name = userData.name):false
    userData.email?(email = userData.email):false
    userData.password?(password = userData.password):false

    try{
        await userSchema.validate({name,email,password})
    }catch(err){
        throw new Error('Validation Failed')
    }
}

module.exports = userValidator;