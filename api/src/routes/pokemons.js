const express= require('express');
const router= express.Router();
const {getPokemons,getByID,getTypes,createPK}= require('./controllers/ctrLpokemons');

router.get('/pokemons',getPokemons);
router.get('/pokemons/:id',getByID);
router.post('/pokemons',createPK)
router.get('/types',getTypes)







module.exports= router