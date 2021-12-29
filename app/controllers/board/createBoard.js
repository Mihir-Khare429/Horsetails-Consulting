const Boards = require('../../models/board');
const validator = require('validator');

const createBoard = async (req,res) => {
    try{
        const userId = req.user.userId
        const body = req.body
        let boardName,color
        if(body.boardName && !validator.isEmpty(body.boardName) && body.boardColor  && !validator.isEmpty(body.boardColor)){
            boardName = body.boardName
            color = body.boardColor
            const board = new Boards({
                boardName:boardName,
                boardColor:color,
                userId:userId
            })
            await board.save()
            const allBoards = await Boards.find({})
            return res.status(200).send({
                message : "Board Created Sucessfully",
                boards : allBoards
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = createBoard