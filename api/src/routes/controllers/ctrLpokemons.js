const { Pokemon, Users, Type } = require('../../db.js');
const { subrequest } = require('../../aditionals_functions/sbrequest.js')
const axios = require('axios');




// Necesito extraer la heigth,weigth,types,name,stats,id,sprites(Opcional por ahora)



async function getPokemons(req, res) {
    try {
        const { name } = req.query
        if (name) {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                .then(data => {
                    let { id, name, base_experience, height, weight, types, stats, sprites } = data.data
                    
                    return res.json({ id, name, base_experience, height, weight, types, stats, sprites })
                })


        }

        axios.get(`https://pokeapi.co/api/v2/pokemon?limit=200`)
            .then(data => {
                let pkms = []
                data.data.results.map(e => {
                    pkms.push(subrequest(e.url))
                })


                return Promise.all(pkms)
            })
            .then(async r => {
                let dbR = await Pokemon.findAll({include:Type})
                let dbFilt=[]
                dbR.map(e=>{
                    dbFilt.push({id:e.id,name:e.name,health:e.health,defense:e.defense,sprites:e.sprites,strength:e.strength,speed:e.speed,height:e.height,weight:e.weight,types:e.types.map(i=>{return i.name})})
                })

                let rsD = []
                r.map(e => {
                    rsD.push({ id: e.id, name: e.name, base_exp: e.base_experience, height: e.height, weight: e.weight, types: e.types.map(e=>{return e.type.name}), stats: e.stats, sprites: e.sprites.front_default })
                })
                res.json(rsD.concat(dbFilt))
            })
        return


    } catch (e) {
        res.json({ error: e })
    }


}


async function getByID(req, res) {
    const { iD } = req.params
    if (Number(iD) !== NaN) {
        let api = await axios.get(`https://pokeapi.co/api/v2/pokemon/${iD}`)
        const { id, name, base_experience, height, weight, types, stats } = api.data

        return res.json({ id, name, base_experience, height, weight, types, stats })

    } else if (Number(iD) === NaN) {
        Pokemon.findOne({ where: { id: iD } })
            .then(resp => {
                res.json(resp)
            })
        return
    }
}

function getTypes(req, res) {
    Type.findAll()
        .then(resp => {
            res.json(resp)
        })
}


async function createPK(req, res) {
    const { name, health, defense, sprites, strength, speed, height, weight, types } = req.body
    const { uid } = req.session
    
    try {
        if (name && health && defense && strength && speed && height && weight && types) {
            let user = await Users.findOne({ where: { id: uid } })
            let pokemon = await Pokemon.create({ name, health, defense, sprites, strength, speed, height, weight })
            await pokemon.setUser(user)
            await pokemon.setTypes(types)
            let pkCreado= await Users.findAll({includes:pokemon})
            console.log(pkCreado)
            return res.status(201).json({ message: "todo ok" })
        }
    } catch (e) {
        res.status(400).json({ message: e })
    }



}



module.exports = {
    getPokemons,
    getByID,
    getTypes,
    createPK
}







