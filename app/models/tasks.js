const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Boards = require('./board');

const taskSchema = Schema({
    taskName : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    status : {
        type : String,
        enum : ['To do','In Progress','On Hold','Completed','Released'],
        default : 'To do'
    },
    boardId : {
        type :  mongoose.SchemaTypes.ObjectId,
        required : true
    }
})

module.exports = mongoose.model('Tasks',taskSchema)