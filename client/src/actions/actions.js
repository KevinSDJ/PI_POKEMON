export const GET_ALL = "GET_ALL";
export const NEXT_PAGE = "NEXT_PAGE";
export const FILTER = "FILTER";
export const ORDER_DESC = "ORDER_DESC";
export const ORDER_ASC = "ORDER_ASC";
export const ORDER_DEFAULT = "ORDER_DEFAULT";
export const RE_CHARGE="RE_CHARGE";
export const TYPE_FILTER="TYPE_FILTER";
const axios = require("axios");




export function getAllPokemon() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/home/pokemons').then((resp) => { return dispatch({ type: GET_ALL, payload: resp.data }) })
    }
}

export function reCharge(payload){
    return {type:RE_CHARGE,payload:payload}
}
export function typeFilter(type){
    return {type:TYPE_FILTER,payload:type}
}

export function filter(payload,type) {
    let fil=[]
    if(type==="default"){
        fil=fil.concat(payload)
    }else{
        payload.forEach(e => {
        if(Array.isArray(e.types)){
            for(var el in e.types){
                if(e.types[el].type.name===type){
                    fil.push(e)
                }
            }
        }
       });
    }
    return { type: FILTER, payload:fil}
}
export function ordDesc() {
    return { type:ORDER_DESC}
}
export function ordAsc() {
    return { type:ORDER_ASC}
}
export function ordDef(payload){
    return {type:ORDER_DEFAULT,payload:payload}
}


