import {
    GET_ALL,
    ORDER_DESC,
    ORDER_ASC,
    RE_CHARGE,
    BY_TYPES,
    BY_USER,
    BY_EXISTENT,
    GET_BY_ID,
    SET_USER,
    GET_TYPES
    } from './../actions/actions'


const initState={
    types:[],
    pokemonsInUse:[],
    pokeDetails:{},
    pokemons:[],
    user:[],
}



export default function root(state=initState,action){
    switch(action.type){
        case GET_ALL:
            return {...state,
                pokemons:action.payload
            };
        case RE_CHARGE:
            return {...state,
                pokemonsInUse:state.pokemons
            }; 
        case BY_TYPES:
            return {...state,pokemonsInUse:state.pokemons.filter(e=>e.types.includes(action.payload))};
        case BY_USER:
            return {...state,pokemonsInUse:state.pokemons.filter(e=>e.hasOwnProperty("userId"))};
        case BY_EXISTENT:
            return {...state,pokemonsInUse:state.pokemons.filter(e=> !e.hasOwnProperty("userId"))};
        case ORDER_DESC:
            return {...state,pokemonsInUse:mergeSort(state.pokemonsInUse,action.payload)};
        case ORDER_ASC:
            return {...state,pokemonsInUse:mergeSort(state.pokemonsInUse,action.payload)};
        case GET_TYPES:
            return {...state,types:action.payload}

        case GET_BY_ID:
            return {...state,pokeDetails:action.payload}
        case SET_USER:
            return {...state,user:action.payload}
        default:
            return state
    }
}



//------ order function

function mergeSort(list, order) {
    if (list.length <= 1) {
        return list;
    }

    var longitud = Math.floor(list.length / 2)
    var derecha = list.slice(0, longitud)
    var izquierda = list.slice(longitud)

    return merge(mergeSort(izquierda,order), mergeSort(derecha,order), order);
}
function merge(izquierda, derecha, order) {
    let result = []
    if (order === "desc") {
        while (izquierda.length && derecha.length) {
            if (izquierda[0].name > derecha[0].name) {
                result.push(izquierda.shift())

            } else if (izquierda[0].name < derecha[0].name) {
                result.push(derecha.shift())
            }

        }
        return [...result, ...izquierda, ...derecha]
    }
    if(order==="asc"){
        while (izquierda.length && derecha.length) {
            if (izquierda[0].name < derecha[0].name) {
                result.push(izquierda.shift())

            } else if (izquierda[0].name > derecha[0].name) {
                result.push(derecha.shift())
            }

        }
        return [...result, ...izquierda, ...derecha]
    }
}


