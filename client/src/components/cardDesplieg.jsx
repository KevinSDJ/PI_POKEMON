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
    const [currentPage,setCurrP]= React.useState(1)
    const pokeXpage=12
    let pokms= useSelector(state=>state.pokemonsInUse)
    let pkUse=pokms

    function handleClick(e){
        e.preventDefault()
        setCurrP(Number(e.target.id))
    }
    let indexOfLastTodo = currentPage * pokeXpage;
    let indexOfFirstTodo = indexOfLastTodo - pokeXpage;
    let currentPokes = pkUse.length>1?pkUse.slice(indexOfFirstTodo, indexOfLastTodo):null;
    const pokes_render= currentPokes?currentPokes.map(e=> <Card
       key={e.id}
       id={e.id}
       name={e.name}
       
    />):"wait"
    let pageNumbers=[]
    for(var i=1;i<=Math.ceil(pokms?.length/pokeXpage);i++){
        pageNumbers.push(i);
    }
    const renderPageNumbers = pageNumbers.map(n => {
        return (
          <li
            style={{"padding":"5px 10px","backgroundColor":"lightcyan","border":"1px solid blue"}}
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
            <ul style={{"display":"flex","listStyle":"none","flexDirection":"row"}}>
                {renderPageNumbers}
            </ul>
            <Div>
               {pokes_render}
            </Div>
        </div>
        
    )
}


