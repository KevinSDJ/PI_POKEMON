const {Users} =require('../db.js');
const bcrypt =require('bcrypt')

function autho(req,res,next){
    const {uid}= req.session
    if(!uid){
        return res.status(401).json({type:"error",msg:"You need to log in to access"})
    }
    next()
}


async function auth(req,res,next){
    let {uid}=req.session
    let {email,password}= req.body
    if(uid){
        let user= await Users.findOne({where:{id:uid}})
        if(user){
            req.session.maxAge=new Date(Date.now()+10600000*12*5)
            return res.status(200).json({type:"success",msg:"Session refresh"})
        }else{
            req.session.destroy()
            return res.status(401).json({type:"error",msg:"User not found"})
        }
    }else if(email||password){
        if (!email || !password) {return res.status(404).json({type:"error",msg:"Params not found"})}
        let user= await Users.findOne({where:{email:email}})
        if(!user) return res.status(404).json({type:"error",msg:"User not found"})
        let passverify=bcrypt.compareSync(password,user.password)
        console.log(passverify)
        if(!passverify){
            return res.status(401).json({type:"error",msg:"Invalid password"})
        }else{
            return next()
        }
    }
}





module.exports={autho,auth}