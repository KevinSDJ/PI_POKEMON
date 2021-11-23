const { Users} = require('../../db.js');


async function getHome(req,res){
    const { uid } = req.session
    if(uid){
        let u= await Users.findAll({where:{id:uid}})
        return res.json(u)
    }
    res.status(400).json({type:"redirect",body:"/login"})
    
}


module.exports={
    getHome
}