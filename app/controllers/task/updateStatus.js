const Tasks = require('../../models/tasks');
const validator = require('validator');
const isValidObjectId = require('../../helpers/isValidObjectId');

const updateTaskSatus = async (req,res) => {
    try{
        const body = req.body
        if(!validator.isEmpty(body.taskId) && isValidObjectId(body.taskId)){
            const oldStatus  = body.currentStatus
            const newStatus = body.updatedStatus
            const task = await Tasks.findOne({_id:body.taskId})
            if(task.status = oldStatus){
                await Tasks.findOneAndUpdate({_id:body.taskId},{status:newStatus})
                return res.status(200).send({
                    message : "Task status updated Sucessfully"
                })
            }else{
                return res.status(404).send({
                    message : "Wrong Current Status Provided"
                })
            }
        }
    }catch(err){
        console.log(err)
    }
}

module.exports = updateTaskSatus