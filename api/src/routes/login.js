const express=require('express');
const { auth } = require('../middlewares/auth.js');
const router=express.Router();
const {loginpost,registerPost,logout}=require('./controllers/login.js');




router.post('/login',auth,loginpost)
router.post('/logout',logout)
router.post('/register',registerPost)



module.exports= router