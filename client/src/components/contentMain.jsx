import React, { useEffect, useState } from "react";
import { Div } from '../Pages/styled_components/containers';
import Filter from "../components/filter";
import Order from "../components/order";
import { useDispatch, useSelector } from "react-redux";
import {reCharge,setUser} from '../actions/actions'
import CarDespl  from "./cardDesplieg";
import { Redirect } from "react-router";




let atr = ["background-color:grey;", "padding:10px;", "display:flex;", "flex-direction: column;"]
let atr2 = ["padding:5px;", "display:flex;", "justify-content: space-around;"]


export function MainCont() {
    let pokms= useSelector(state=>state.pokemons)
    const [response,setResponse]= useState({type:null,body:null})
    const [filSt,setflSt]= useState(null)
    const dispatch= useDispatch()
    
    useEffect(()=>{
        dispatch(setUser(setResponse))
        if(pokms.length>1){
           dispatch(reCharge())
        }
    },[pokms,dispatch])

    if(response.type){
        return (
            <Redirect to={response.body}/>
        )
    }else{
        return (
        <Div atributes={atr}>
            <Div atributes={atr2}>
                <Filter setSt={setflSt}/>
                <Order filtStatus={filSt}/>
            </Div>
            <CarDespl/>
        </Div>
    )
    }
    
}


