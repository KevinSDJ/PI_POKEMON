const { Pokemon, Users, Type } = require('../../db.js');
const { subrequest } = require('../../aditionals_functions/sbrequest.js')
const axios = require('axios');
const cacheStore = require('../../cache/cache');




//Extraer la heigth,weigth,types,name,stats,id,sprites(Opcional por ahora)


async function getPokemons(req, res) {
    try {
        const { name } = req.query
        if (cacheStore.getCache().length < 1) {
            if (name) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    .then(data => {
                        let { id, name, base_experience, height, weight, types, stats } = data.data
                        return res.json({ id, name, base_experience, height, weight, types, stats })
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
                    let rsD = []
                    r.map(e => {
                        rsD.push({ id: e.id, name: e.name, base_exp: e.base_experience, height: e.height, weight: e.weight, types: e.types.map(e => { return e.type.name }), stats: e.stats, sprites: e.sprites.front_default })
                    })
                    cacheStore.updateCache(rsD)
                    res.json(rsD)
                })
            return
        } else {
            if (name) {
                axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
                    .then(data => {
                        let { id, name, base_experience, height, weight, types, stats } = data.data
                        return res.json({ id, name, base_experience, height, weight, types, stats })
                    })
            }else{
                
                res.status(200).json(cacheStore.getCache())
            }
        }
    } catch (e) {
        res.json({ error: e })
    }


}


 function getByID(req, res) {
    const { iD } = req.params
    if (Number(iD) !== NaN) {
        let data=cacheStore.getCache().filter(e=> e.id=== Number(iD))[0]
        const  {id,name,base_exp,height,weight,types,stats}=data
        return res.status(200).json({id,name,base_exp,height,weight,types,stats})

    } else if (Number(iD) === NaN) {
        const d= cacheStore.getCache().filter(e=>e.id===iD)[0]
        res.status(200).json(d)
    }
}

function getTypes(req, res) {
    Type.findAll()
        .then(resp => {
            res.json(resp)
        })
}


async function createPK(req, res) {
    const { name, hp, defense, sprites, attack, special_attack,special_defense,speed, height, weight, types } = req.body
    const { uid } = req.session
    console.log(uid)
    try {
        if (name && hp && defense && attack&& special_attack && special_defense&& speed && height && weight && types) {
            let user = await Users.findOne({ where: { id: uid } })
            console.log(user)
            console.log("despues de buscar user")
            let pokemon = await Pokemon.create({ name, hp, defense, sprites, attack,special_attack,special_defense, speed, height, weight })
            console.log("despues de crear poke")
            await pokemon.setUser(user)
            console.log("agregar usuario al poke")
            await pokemon.setTypes(types)
            console.log("agregar tipos a pokemon")
            let pkCreado = await Pokemon.findOne({where:{name:name},include:Type})
            console.log(pkCreado)
            const {id,name,hp,defense,sprites,special_attack,special_defense,speed,height,weight,userId,types}=pkCreado
            cacheStore.updateCache({
                id,
                name,
                height,
                weight,
                stats:[{base_stat:hp,stat:{name:"hp"}},
                {base_stat:defense,stat:{name:"defense"}},
                {base_stat:attack,stat:{name:"attack"}},
                {base_stat:special_attack,stat:{name:"special_attack"}},
                {base_stat:special_defense,stat:{name:"special_defense"}},
                {base_stat:speed,stat:{name:"speed"}}
            ],
            types,
            userId
        })
            return res.status(201).json({ message: "todo ok" })
        }
    } catch (e) {
        console.log(e)
        res.status(400).json({ message: e })
    }



}



module.exports = {
    getPokemons,
    getByID,
    getTypes,
    createPK
}







