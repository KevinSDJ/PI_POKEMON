const { Router } = require('express');
// Importar todos los routers;
const {Users, Pokemon} = require('../db.js');
const rtPokemons = require('./pokemons.js');
const rtLoggin= require('./loggin.js');
const rtHome= require('./home.js');





const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




// sesion de inicio
router.use('/',rtLoggin)




//------- home y pokemons
router.use('/',rtHome)
router.use('/home/',rtPokemons)



module.exports = router;
