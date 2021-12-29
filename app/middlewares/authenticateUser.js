const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const config = process.env;
const users = require('../models/user');

const jwtSign = (email,userId) => {
    const token = jwt.sign({email:email,userId:userId},config.SECRET,{expiresIn:"2h"})
    return token
}

const jwtVerify = (req, res, next) => {
    const token =
      req.body.token || req.query.token || req.headers["x-access-token"];
      
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded = jwt.verify(token, config.SECRET);
      req.user = decoded;
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
    return next();
  };
  

module.exports = {
    jwtSign,
    jwtVerify
}