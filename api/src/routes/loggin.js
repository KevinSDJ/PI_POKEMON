const express=require('express');
const router=express.Router();
const {loginpost,loginGet,registerGet,registerPost,enter,logeout}=require('./controllers/loggin.js');



router.get('/',enter)
router.get('/login',loginGet)
router.post('/login',loginpost)
router.post('/logeout',logeout)
router.get('/register',registerGet)
router.post('/register',registerPost)



module.exports= router