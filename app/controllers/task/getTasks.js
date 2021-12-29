const Tasks = require('../../models/tasks');
const validator = require('validator');
const isValidObjectId = require('../../helpers/isValidObjectId');

const getTasks = async (req,res) => {
    try{
        const body = req.body
        if(!validator.isEmpty(body.boardId) && isValidObjectId(body.boardId)){
            const response = {
                "To do" : [],
                "In Progress" : [],
                "On Hold" : [],
                "Completed" : [],
                "Released" : []
            }
            const tasks = await Tasks.find({boardId:body.boardId})
            tasks.forEach( (task) => {
                const status = task.status
                response[status].push(task)
            })
            return res.status(200).send({
                message : "Tasks List",
                Tasks : response
            })
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = getTasks