const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Users = require('./user');

const boardScehma = new Schema({
    boardName : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    boardColor : {
        type : String,
        required : true,
        trim : true
    },
    userId : {
        type : mongoose.Types.ObjectId,
        required : true
    }
})

module.exports = mongoose.model('Board',boardScehma);