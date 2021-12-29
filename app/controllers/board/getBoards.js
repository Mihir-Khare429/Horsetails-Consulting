const Boards = require('../../models/board');

const getBoards = async (req,res) => {
    try{
        body = req.body
        let userId 
        userId= body.userId?body.userId:req.user.userId
        const boards = await Boards.find({userId:userId})
        return res.status(200).send({
            message : "Boards List",
            boards : boards
        })
    }catch(err){
        console.log(err)
    }
}

module.exports = getBoards