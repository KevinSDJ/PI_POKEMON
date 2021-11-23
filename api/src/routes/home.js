const express=require('express');
const router=express.Router();
const {getHome}=require('./controllers/home.js');
const {isAuthorized}= require('../middlewares/verifyUser');

router.get('/home',getHome)




module.exports= router