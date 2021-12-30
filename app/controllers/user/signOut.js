const Users = require('../../models/user');

const signOutUser = async (req,res) => {
    try{
        const userId = req.user.userId
        await Users.findOneAndUpdate({_id:userId},{token:""})
        return res.status(200).send({
            message : "User Logeed Out"
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = signOutUser