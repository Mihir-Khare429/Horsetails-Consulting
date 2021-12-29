const Tasks = require('../../models/tasks');
const validator = require('validator');
const isValidObjectId = require('../../helpers/isValidObjectId');

const createTask = async (req,res) => {
    try{
        const body = req.body
        if(isValidObjectId(body.boardId) && !validator.isEmpty(body.taskName)){
            const task = new Tasks({
                taskName : body.taskName,
                status : body.status,
                boardId : body.boardId
            })
            await task.save()
            const allTasks = await Tasks.find({})
            res.status(200).send({
                message : "New Task Added Sucessfully",
                Tasks : allTasks
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = createTask