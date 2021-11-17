import {GET_ALL,ORDER_DESC,ORDER_ASC,ORDER_DEFAULT,RE_CHARGE,BY_TYPES,BY_USER,BY_EXISTENT,GET_BY_ID} from './../actions/actions'


const initState={
    pokemonsInUse:[],
    pokeDetails:{},
    pokemons:[],
    user:{},
}
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


export default function root(state=initState,action){
    switch(action.type){
        case GET_ALL:
            return {...state,
                pokemons:state.pokemons.concat(action.payload)
            };
        case RE_CHARGE:
            return {...state,
                pokemonsInUse:state.pokemons
            }; 
        case BY_TYPES:
            return {...state,pokemonsInUse:action.payload};
        
        case BY_USER:
            return {...state,pokemonsInUse:action.payload};

        case BY_EXISTENT:
            return {...state,pokemonsInUse:state.pokemons};

        case ORDER_DESC:
            return {...state,pokemonsInUse:mergeSort(state.pokemonsInUse,"desc")};

        case ORDER_ASC:
            return {...state,pokemonsInUse:mergeSort(state.pokemonsInUse,"asc")};
        case ORDER_DEFAULT:
            return {...state,pokemonsInUse:state.pokemons}
        case GET_BY_ID:
            return {...state,pokeDetails:action.payload}

        default:
            return state
    }
}