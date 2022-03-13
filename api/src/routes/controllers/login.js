const { Users } = require('../../db.js');

const bcrypt =require('bcrypt')


const checKSession=(req,res,next)=>{
    let {uid}= req.session
    if(uid){
        return res.status(200)
    }else{
        req.session.destroy()
        return res.status(404)
    }
}



async function loginpost(req, res) {
    let user= await Users.findOne({where:{email:req.body.email}})
    let {username,id,image}= user
    req.session.uid= id
    return res.status(200).json({type:"success",msg:"Login success",data:{user:{username,id,image}}})
    
}

async function registerPost(req, res) {
    const { username, email, password,image} = req.body
    if(!username||!email||!password){
        return res.status(404).json({type:"error",msg:"Missing fields"})
    }
    let [user,created]= await Users.findOrCreate({where:{email:email},defaults:{username,password,image}})
    if (created) {
        return res.json({type:"success",msg:"register successfull"})
    } else {
        return res.status(400).json({type:"error",msg:"User already register"})
    }
}
function logout(req, res) {
    res.session.destroy()
    res.redirect('/')
}


module.exports = {
    loginpost,
    registerPost,
    logout
}