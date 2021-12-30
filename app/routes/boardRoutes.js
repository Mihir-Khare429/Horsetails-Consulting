const router = require('express').Router();
const createBoard = require('../controllers/board/createBoard');
const getBoards = require('../controllers/board/getBoards');
const deleteBoard = require('../controllers/board/deleteBoard');
const { jwtVerify } = require('../middlewares/authenticateUser');

router.post('/create-board',jwtVerify,createBoard);
router.get('/list-boards',jwtVerify,getBoards)
router.delete('/delete-board',jwtVerify,deleteBoard);

module.exports = router