const {Users} =require('../db.js');


function isAuthorized(req,res,next){
    const {uid}= req.session;
    Users.findAll()
    .then(resp=>{
        let user= resp.find(u=>u.id==uid)
        if(user){
            next()
            return
        }else{
            res.redirect('/login')
        }
    })
    
}





module.exports={isAuthorized}