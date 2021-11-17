export const GET_ALL = "GET_ALL";
export const BY_TYPES = "BY_TYPES";
export const ORDER_DESC = "ORDER_DESC";
export const ORDER_ASC = "ORDER_ASC";
export const ORDER_DEFAULT = "ORDER_DEFAULT";
export const RE_CHARGE="RE_CHARGE";
export const BY_USER="BY_USER";
export const BY_EXISTENT="BY_EXISTENT";
const axios = require("axios");




export function getAllPokemon() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/home/pokemons').then((resp) => { return dispatch({ type: GET_ALL, payload: resp.data }) })
    }
}
// -- precarga de pokemons in use
export function reCharge(){
    return {type:RE_CHARGE}
}
//filtro segun el tipo
export function filTypes(payload,type) {
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
    return { type:BY_TYPES, payload:fil}
}
// filtro segun usuario
export function filUs(payload,id){
    let fil=[]
    payload.forEach(e=>{
        if(e.hasOwnProperty("userId")){
            if(e.userId===id){
                fil.push(e)
            }
        }
    })
    return {type:BY_USER,payload:fil}
}
//___________________
//filtro segun existentes
export function filExist(){
    return {type:BY_EXISTENT}
}
//-----------------------------

// filtros de ordenamientos
export function ordDesc() {
    return { type:ORDER_DESC}
}
export function ordAsc() {
    return { type:ORDER_ASC}
}
export function ordDef(payload){
    return {type:ORDER_DEFAULT,payload:payload}
}
//------------------------------------------------

