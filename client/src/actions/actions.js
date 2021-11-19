export const GET_ALL = "GET_ALL";
export const BY_TYPES = "BY_TYPES";
export const ORDER_DESC = "ORDER_DESC";
export const ORDER_ASC = "ORDER_ASC";
export const ORDER_DEFAULT = "ORDER_DEFAULT";
export const RE_CHARGE="RE_CHARGE";
export const BY_USER="BY_USER";
export const BY_EXISTENT="BY_EXISTENT";
export const GET_BY_ID="GET_BY_ID";
export const SET_USER="SET_USER";
export const CLEAR_USER="CLEAR_USER";
const axios = require("axios");



// traer todos los pokemones 
export function getAllPokemon() {
    return function (dispatch) {
        return axios.get('http://localhost:3001/home/pokemons').then((resp) => { return dispatch({ type: GET_ALL, payload: resp.data }) })
    }
}
//-----------------------------


// precarga de pokemons in use
export function reCharge(){
    return {type:RE_CHARGE}
}
//-----------------------------

// filtro segun el tipo
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
//-----------------------------


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
//-----------------------------


// filtro segun existentes
export function filExist(){
    return {type:BY_EXISTENT}
}
//-----------------------------

// filtros de ordenamientos con merger sort
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


// peticion según id
export function getById(id){
    return function (dispatch){
        return axios.get(`http://localhost:3001/home/pokemons/${id}`)
        .then(r=> dispatch({type:GET_BY_ID,payload:r.data}))
    }
}

// traer datos de usuario en insertar sesion
export function setUser(setResponse){
   return function(dispatch){
    let axiosConfig = {
        withCredentials: true,
      }
       return axios.get('http://localhost:3001/home',axiosConfig)
       .then(r=>r.data.hasOwnProperty("type")?setResponse({type:r.data.type,body:r.data.body}):dispatch({type:SET_USER,payload:r.data}))
   }
}
