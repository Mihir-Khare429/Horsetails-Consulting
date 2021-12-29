const router = require('express').Router();
const userSignUp = require('../controllers/user/signUp')
const userSignIn = require('../controllers/user/signIn');
const userSignOut = require('../controllers/user/signOut');
const { jwtVerify } = require('../middlewares/authenticateUser');

router.post('/signUp',userSignUp)
router.post('/signIn',userSignIn)
router.post('/signOut',jwtVerify,userSignOut);

module.exports = router