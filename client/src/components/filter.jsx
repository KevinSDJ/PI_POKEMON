import React,{useEffect, useState} from "react";
import { Div } from "../Pages/styled_components/containers";
import {connect} from 'react-redux';
import {filter,typeFilter} from '../actions/actions';

let atr=["background-color:blue;","color:white;","display:flex;","align-items:center;"]


export function Filter(props){
    const [status,setStatus]=useState(null) 
    const dispatch= props.dispatch
   
    if(props.pokemonsInUse?.length>1){
        document.getElementById("typ").hidden=false
    }
    useEffect(()=>{
        if(status!==null&&status==="default"){
            dispatch(filter(props.pokemons,status))
            dispatch(typeFilter(""))
         }
        if(status!==null&&status!=="default"){
           dispatch(filter(props.pokemons,status))
           dispatch(typeFilter(status))
        }
    },[dispatch,status,props.pokemons])
   


    return (
        <Div atributes={atr}>
            <button >filter</button>
            <select id="typ" name="type" onChange={(e)=>setStatus(e.target.value)} hidden>
                <option defaultValue value="default">default</option>
                <option value="normal">normal</option>
                <option value="fighting">fighting</option>
                <option value="flying">flying</option>
                <option value="poison">poison</option>
                <option value="ground">ground</option>
                <option value="rock">rock</option>
                <option value="bug">bug</option>
                <option value="ghost">ghost</option>
                <option value="steel">steel</option>
                <option value="fire">fire</option>
                <option value="water">water</option>
                <option value="grass">grass</option>
                <option value="electric">electric</option>
                <option value="psychic">psychic</option>
                <option value="ice">ice</option>
                <option value="dragon">dragon</option>
                <option value="dark">dark</option>
                <option value="fairy">fairy</option>
                <option value="unknown">unknown</option>
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

export default connect(mapStateToProps)(Filter);