import React from "react";
import Card from "./card";
import {useSelector} from 'react-redux';
import styled from "styled-components";









let Div=styled.div`
   display: flex;
   flex-wrap: wrap;
   padding-top: 4em;
`;

export default function CarDespl(){
    let pokms= useSelector(state=>state.pokemonsInUse)
    //function clear(str){
    //    if(str.split("").includes("-")){
    //      let indexSeparate=str.indexOf("-")
    //      return str.slice(0,indexSeparate) 
    //    }else{
    //        return str
    //    }

    //e.name.charAt(0).toUpperCase()+clear(e.name.slice(1))
    //}
    //let Img=require('../images/Bulbasaur.gif');
    return(
        <Div>
        {pokms.length>1?pokms.map(e=> <Card 
        key={e.id}
        id={e.id}
        name={e.name}
        sprite={e.sprites}
        
        />):"wait"}</Div>
    )
}


