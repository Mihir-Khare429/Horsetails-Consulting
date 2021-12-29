const Boards = require('../../models/board');
const validator = require('validator');
const isValidObjectId = require('../../helpers/isValidObjectId');

const deleteBoard = async (req,res) => {
    try{
        const body = req.body
        if(body.boardId  && !validator.isEmpty(body.boardId) && isValidObjectId(body.boardId)){
            await Boards.findOneAndDelete({_id:body.boardId})
            return res.status(200).send({
                message : "Board Deleted"
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = deleteBoard