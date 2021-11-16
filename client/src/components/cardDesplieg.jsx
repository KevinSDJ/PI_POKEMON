import React from "react";
import Card from "./card";
import {useSelector} from 'react-redux';
import styled from "styled-components";

function clear(str){
        if(str.split("").includes("-")){
          let indexSeparate=str.indexOf("-")
          return str.slice(0,indexSeparate) 
        }else{
            return str
        }    
    }

let Div=styled.div`
   display: flex;
   flex-wrap: wrap;
   padding-top: 4em;
`;

export default function CarDespl(){
    const [currentPage,setCurrP]= React.useState(1)
    const pokeXpage=9
    let pokms= useSelector(state=>state.pokemonsInUse)
    let pkUse=pokms

    function handleClick(e){
        e.preventDefault()
        setCurrP(Number(e.target.id))
    }
    let indexOfLastTodo = currentPage * pokeXpage;
    let indexOfFirstTodo = indexOfLastTodo - pokeXpage;
    let currentPokes = pkUse?.length>1?pkUse.slice(indexOfFirstTodo, indexOfLastTodo):null;
    const pokes_render= currentPokes.length>1?currentPokes.map(e=> <Card
       key={e.id}
       id={e.id}
       name={e.name.charAt(0).toUpperCase()+clear(e.name.slice(1))}
       sprite={e.sprites}
    />):"wait"
    let pageNumbers=[]
    for(var i=1;i<=Math.ceil(pokms.length/pokeXpage);i++){
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(n => {
        return (
          <li
            key={n}
            id={n}
            onClick={handleClick}
          >
            {n}
          </li>
        );
      });

    return(
        <div>
            <ul>
                {renderPageNumbers}
            </ul>
            <Div>
               {pokes_render}
            </Div>
        </div>
        
    )
}


