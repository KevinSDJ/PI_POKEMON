const express= require('express');
const router= express.Router();
const {getPokemons,getByID,getTypes,createPK}= require('./controllers/ctrLpokemons');
const {autho} = require('../middlewares/auth')

router.get('/pokemons',autho,getPokemons);
router.get('/pokemons/:iD',autho,getByID);
router.post('/pokemons',autho,createPK)
router.get('/types',autho,getTypes)







module.exports= router