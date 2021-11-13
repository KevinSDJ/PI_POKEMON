import React, { useState,useEffect} from "react";
import { Div } from "../Pages/styled_components/containers";
import {connect} from 'react-redux';
import {ordDef,ordDesc,ordAsc} from '../actions/actions'
let atr=["background-color:black;","color:white;","display:flex;","align-items:center;"]


export function Order(props){
    const [status,setStatus]=useState(null);
    const  dispatch= props.dispatch
    if(props.pokemonsInUse?.length>1){
        console.log("esta cargado")
        document.getElementById("selOrd").hidden=false
    }

    useEffect(()=>{
        if(status==="default"){
            dispatch(ordDef())
            
        }
        if(status==="desc"){
            dispatch(ordDesc())
        }
        if(status==="asc"){
            dispatch(ordAsc())
        }
    },[dispatch,status])
    return(
        <Div atributes={atr}>
            Order By
            <select id="selOrd" name="select" onChange={(e)=>{
                setStatus(e.target.value)
                }} hidden>
                <option defaultValue value="default">default</option>
                <option value="desc">desc</option>
                <option value="asc">asc</option>
            </select>
        </Div>
    )
}

function mapStateToProps(state) {
    return {
      pokemons: state.pokemons,
      pokemonsInUse:state.pokemonsInUse
    };
  }

export default connect(mapStateToProps)(Order);