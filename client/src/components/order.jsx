import React, { useState,useEffect} from "react";
import { Div } from "../Pages/styled_components/containers";
import {connect} from 'react-redux';
import {ordDef,ordDesc,ordAsc,filTypes} from '../actions/actions'
let atr=["background-color:black;","color:white;","display:flex;","align-items:center;"]


export function Order(props){
    const [status,setStatus]=useState(null);
    const  dispatch= props.dispatch
    let filtStatus=props.filtStatus
    

    useEffect(()=>{
        if(status==="default"){
            if(filtStatus!==null||filtStatus!== "default"){
                dispatch(filTypes(props.pokemons,filtStatus))
            }else{
                dispatch(ordDef())
            }
        }
        if(status==="desc"){
            dispatch(ordDesc())
        }
        if(status==="asc"){
            dispatch(ordAsc())
        }
    },[dispatch,status,filtStatus,props.pokemons])
    return(
        <Div atributes={atr}>
            Order By
            <select id="selOrd" name="select" onChange={(e)=>{
                setStatus(e.target.value)
                }}>
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