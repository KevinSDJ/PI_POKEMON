import React, { useEffect } from "react";
import { Div } from '../Pages/styled_components/containers';
import Filter from "../components/filter";
import Order from "../components/order";
import { useDispatch, useSelector } from "react-redux";
import {reCharge} from '../actions/actions'
import CarDespl  from "./cardDesplieg";




let atr = ["background-color:grey;", "padding:10px;", "display:flex;", "flex-direction: column;"]
let atr2 = ["padding:5px;", "display:flex;", "justify-content: space-around;"]


export function MainCont() {
    let pokms= useSelector(state=>state.pokemons)
    const dispatch= useDispatch()
    useEffect(()=>{
        if(pokms.length>1){
           dispatch(reCharge())
        }
    },[pokms,dispatch])
    return (
        <Div atributes={atr}>
            <Div atributes={atr2}>
                <Filter />
                <Order />
            </Div>
            <CarDespl/>
        </Div>
    )
}


