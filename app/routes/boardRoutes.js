const router = require('express').Router();
const createBoard = require('../controllers/board/createBoard');
const getBoards = require('../controllers/board/getBoards');
const { jwtVerify } = require('../middlewares/authenticateUser');

router.post('/create-board',jwtVerify,createBoard);
router.get('/list-boards',jwtVerify,getBoards)

module.exports = router