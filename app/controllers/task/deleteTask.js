const Tasks = require('../../models/tasks');
const validator = require('validator');
const isValidObjectId = require('../../helpers/isValidObjectId');

const deleteTask = async (req,res) => {
    try{
        const body = req.body
        if(body.taskId  && !validator.isEmpty(body.taskId) && isValidObjectId(body.taskId)){
            await Tasks.findOneAndDelete({_id:body.taskId})
            return res.status(200).send({
                message : "Task Deleted"
            })
        }
    }catch(err){

    }
}

module.exports = deleteTask