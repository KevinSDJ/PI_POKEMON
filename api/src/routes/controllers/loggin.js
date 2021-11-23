const { Users } = require('../../db.js');
const { verify } = require('../../middlewares/verifyUser');



function enter(req, res) {
    res.send(`
    <h1>Welcome to pokemon App</h1>
    <span><a href='/login'>Ingresar</a><p></p><a href='/register'>Registrarse</a></span>
    `)
}


async function loginGet(req, res) {
    const { uid } = req.session
    if(uid){
        let u = Users.findAll({where:{id:uid}})
        if(u){
            return res.json([{type:"redirect",body:"/home"},u])
        }
    }
    res.status(200)
}

function loginpost(req, res) {
    const { email, password } = req.body
    Users.findAll().then(resp => {
        if (!email || !password) {
            return res.status(400).json({type:"redirect",body:"/login"})
        }
        if (resp.length === 0) {
            res.status(404)
            return res.json({type:"redirect",body:"/register"})
    } else {
        let user =resp.find(u => u.email=== email)
        if (user) {
            req.session.uid= user.id
            return res.json({type:"redirect",body:"/home"})
        } else {
            res.status(404)
            return res.json({type:"redirect",body:"/register"})
        }
    }
    })



    

}

async function registerGet(req, res) {
    const { uid } = req.session
    if(uid){
       let u=await Users.findOne({where:{id:uid}})
       if(u){
           return res.status(302).json({type:"redirect",body:"/login"})
       }
       res.clearCookie('uID')
    }
    res.status(100)

}


async function registerPost(req, res) {
    const { username, email, password,image} = req.body
    const users = await Users.findAll()
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (user) {
        return res.json({type:"redirect",body:"/login"})
    } else {
        await Users.create({ username, email, password,image})
        return res.json({type:"redirect",body:"/login"})
    }


}
function logeout(req, res) {
    res.clearCookie('uID')
    res.redirect('/')
}



module.exports = {
    loginpost,
    loginGet,
    registerGet,
    registerPost,
    enter,
    logeout
}