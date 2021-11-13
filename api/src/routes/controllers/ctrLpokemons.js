const { Pokemon, Users, Type } = require('../../db.js');
const { subrequest } = require('../../aditionals_functions/sbrequest.js')
const axios = require('axios');


// Necesito extraer la heigth,weigth,types,name,stats,id,sprites(Opcional por ahora)

function getPokemons(req, res) {
    const { name } = req.query
    if (name) {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(data => {
                let {id,name,base_experience,height,weight,types,stats,sprites}= data.data
                res.json({id,name,base_experience,height,weight,types,stats,sprites})
            })

        return
    }
    axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`)
        .then(data => {
            let pkms = []
            data.data.results.map(e => {
                pkms.push(subrequest(e.url))
            })
            Promise.all(pkms).then(response => {
                let pokesFiltrados = []
                response.map(e => {
                    pokesFiltrados.push({
                        id: e.id,
                        name: e.name,
                        base_exp: e.base_experience,
                        height: e.height,
                        weight: e.weight,
                        types: e.types,
                        stats: e.stats,
                        sprites: e.sprites.front_default,
                        forms:e.forms
                    })
                })
                res.json([...pokesFiltrados])
            })
        })
}


async function getByID(req, res) {
    const { id } = req.params
    if (Number(id) !== NaN) {
        let api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(result => result.data)
        res.json(api)
        return
    } else if (Number(id) === NaN) {
        Pokemon.findOne({ where: { id: id } })
            .then(resp => {
                res.json(resp)
            })
        return
    }
}

function getTypes(req, res) {
    Type.findAll()
    .then(resp=>{
        res.json(resp)
    })

    return
    
}


async function createPK(req, res) {
    const { name,health,defense,sprite,strength,speed,height,weight,type } = req.body
    const { uid } = req.session
    if(name&&health&&defense&&strength&&speed&&height&&weight&&type){
        await Pokemon.create({ name,health,defense,sprite,strength,speed,height,weight,type, userId: uid })
        let pokemon = await Pokemon.findAll()
        res.json(pokemon)
    }
    

}



module.exports = {
    getPokemons,
    getByID,
    getTypes,
    createPK
}







