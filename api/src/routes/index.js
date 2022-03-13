const { Router } = require('express');
// Importar todos los routers;
const {Users, Pokemon} = require('../db.js');
const rtPokemons = require('./pokemons.js');
const rtLoggin= require('./login.js');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




// sesion de inicio
router.use('/auth',rtLoggin)
router.use('/',rtPokemons)



module.exports = router;
