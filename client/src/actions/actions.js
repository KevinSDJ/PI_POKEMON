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
export const FILT_DEF="FILT_DEF";
export const ORD_TYPE_PRESENT="ORD_TYPE_PRESENT";
export const GET_TYPES="GET_TYPES";
export const SET_SEARCH="set_search";
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
export function filTypes(types) {
    return { type:BY_TYPES, payload:types}
}

// filtro segun usuario
export function filUs(){
    return {type:BY_USER}
}
//-----------------------------


// filtro segun existentes
export function filExist(){
    return {type:BY_EXISTENT}
}
//-----------------------------

// filtros de ordenamientos con merger sort
export function orderDesc(){
    return {type:ORDER_DESC,payload:"desc"}
}
export function orderAsc(){
    return {type:ORDER_ASC,payload:"asc"}
}


// llamada a la api
export function getAlltypes(){
    return function (dispatch){
        axios.get('http://localhost:3001/home/types')
        .then(r=>{
            let resp=[]
            r.data.map(e=>e.name!=="shadow"&&resp.push({id:e.id,name:e.name,icon:require(`../assets/iconsTypes/${e.name}.png`).default}))
            return dispatch({type:GET_TYPES,payload:resp})
        })
    }
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
