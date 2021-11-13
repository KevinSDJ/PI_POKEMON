const { Users } = require('../../db.js');
const { verify } = require('../../middlewares/verifyUser');



function enter(req, res) {
    res.send(`
    <h1>Welcome to pokemon App</h1>
    <span><a href='/login'>Ingresar</a><p></p><a href='/register'>Registrarse</a></span>
    `)
}


function loginGet(req, res) {
    res.send(`
    <h1>Iniciar sesión</h1>
    <form method='post' action='/login'>
      <input type='email' name='email' placeholder='Email' required />
      <input type='password' name='password' placeholder='Contraseña' required />
      <input type='submit' />
    </form>
    <a href='/register'>Registrarse</a>
  `)
}

async function loginpost(req, res) {
    const { email, password } = req.body
    Users.findAll().then(resp => {
        if (!email || !password) {
            return res.status(400).send('Bad request,check parameters')
        }
        if (resp.length === 0) {
        return res.status(404).json({redirect:"/register"})
    } else {
        let user =resp.find(u => u.email === email)
        if (user) {
            req.session.uid= user.id
            return res.status(301).json({redirect:"/home"})
        } else {
            return res.status(404).json({redirect:"/register"})
        }
    }
    })



    

}

function registerGet(req, res) {
    const { uid } = req.session
    if (!uid) {
        return res.send(`
    <h1>Register</h1>
    <form method="post" action='/register'>
         <input name="username" type='text' placeholder="username"/>
         <input name="email" type="email" placeholder="email" />
         <input name="password" type="password" placeholder="password"/>
         <input type='submit' />    
    </form>`)
    } else {
        return res.redirect('/login')
    }

}


async function registerPost(req, res) {
    const { username, email, password,image} = req.body
    const users = await Users.findAll()
    let user = users.find(u => u.email.toLowerCase() === email.toLowerCase())
    if (user) {
        return res.json({redirect:"/login"})
    } else {
        await Users.create({ username, email, password,image})
        res.status(201)
        return res.json({redirect:"/login"})
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