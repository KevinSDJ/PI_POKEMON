import React from "react";
import Card from "./card";
import { useSelector } from 'react-redux';
import styled from "styled-components";



let Div = styled.div`
   display: flex;
   flex-wrap: wrap;
   padding-top: 4em;
   gap: 1em 1em;
   transition: all 500ms ease-in-out;
   justify-content: center;
   box-sizing: content-box;
   margin:0 auto;
   transition: ease-in-out 300ms;
   background-color: grey;
`;


export default function CarDespl() {
  const [currentPage, setCurrP] = React.useState(1)

  const pokeXpage = 10
  let pokms = useSelector(state => state.pokemonsInUse)
  let pkUse = pokms

  function handleClick(e) {
    e.preventDefault()
    setCurrP(Number(e.target.id))
  }
  

  let indexOfLastTodo = currentPage * pokeXpage;
  let indexOfFirstTodo = indexOfLastTodo - pokeXpage;
  let currentPokes = pkUse.length > 1 ? pkUse.slice(indexOfFirstTodo, indexOfLastTodo) : null;
  const pokes_render = currentPokes ? currentPokes.map(e => <Card
    key={e.id}
    id={e.id}
    name={e.name}
    sprite={e.sprites}
    types={e.types}

  />) : "wait"
  let pageNumbers =[]
  function btnClick(e) {
    if (e.target.id === "next" && currentPage < pageNumbers.length) {
      setCurrP(currentPage + 1)
    }
    if (e.target.id === "prev" && currentPage > 1) {
      setCurrP(currentPage - 1)
    }
  }
  for (var i = 1; i <= Math.ceil(pokms?.length / pokeXpage); i++) {
    pageNumbers.push(i);
  }

 



  const RenderPageNumbers = ()=>{
    return (
       <div style={{"display":"flex","alignItems":"center"}}>
          {currentPage>pageNumbers.length?setCurrP(1):""}
          {currentPage>1?<li
           style={{ "padding": "5px 10px", "backgroundColor": "lightcyan", "border": "1px solid grey" }}
           key={pageNumbers[pageNumbers.indexOf(currentPage-1)]}
           id={pageNumbers[pageNumbers.indexOf(currentPage-1)]}
           onClick={handleClick}
          >{pageNumbers[pageNumbers.indexOf(currentPage-1)]}</li>:null}
         <li
          style={{ "padding": "10px 15px", "backgroundColor": "lightcyan", "border": "1px solid blue" }}
          key={currentPage}
          id={currentPage}
          onClick={handleClick}
        >
          {currentPage}
        </li>
        {currentPage<pageNumbers.length?<li
           style={{ "padding": "5px 10px", "backgroundColor": "lightcyan", "border": "1px solid grey" }}
           key={pageNumbers[pageNumbers.indexOf(currentPage+1)]}
           id={pageNumbers[pageNumbers.indexOf(currentPage+1)]}
           onClick={handleClick}
          >{pageNumbers[pageNumbers.indexOf(currentPage+1)]}</li>:null}
       </div>
        
      

    );
  };

  return (
    <div>
      <Div>
        {pokes_render}
      </Div>
      <ul style={{ "display": "flex", "listStyle": "none", "flexDirection": "row" }}>
      <button id="prev" onClick={btnClick}>prev</button>
        <RenderPageNumbers/>
      <button id="next" onClick={btnClick}>next</button>
      </ul>
    </div>

  )
}


