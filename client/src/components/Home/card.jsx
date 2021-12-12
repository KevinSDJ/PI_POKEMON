import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const colorsType={
    bug:"rgba(160, 191, 48,0.8)",
    water:"rgba(82, 154, 217,0.8)",
    dark:"rgb(99, 95, 115,0.8)",
    dragon:"rgb(11, 107, 191,0.8)",
    electric:"rgb(242, 233, 99,0.8)",
    fairy:"rgb(242, 167, 230,0.8)",
    fighting:"rgb(217, 67, 80,0.8)",
    fire:"rgba(242, 139, 80,0.8)",
    flying:"rgba(145, 176, 217,0.8)",
    ghost:"rgba(83, 104, 166,0.8)",
    grass:"rgba(94, 191, 108,0.8)",
    ground:"rgba(217, 110, 72,0.8)",
    ice:"rgba(201, 242, 235,0.8)",
    normal:"rgba(166, 164, 159,0.8)",
    poison:"rgba(155, 99, 191,0.8)",
    psychic:"rgba(242, 109, 120,0.8)",
    rock:"#BFAC88",
    steel:"#5D5D63"

}





let Container = styled.div`
   a{
       text-decoration: none;
       outline: none;
       color:white;
   }
   position: relative;
   width: 15em;
   height: 15em;
   box-sizing: border-box;
   ${p=>p.types?.length<2?`background-color:${colorsType[p.types[0]]};`:`background: linear-gradient(180deg,${colorsType[p.types[0]]},${colorsType[p.types[1]]});`}
`
let InerCard= styled.div`
  position: relative;
  background-image: url(${p=> Number(p.poke.id)?p.poke.sprite:p.poke.spr});
  background-position: center;
  background-repeat: no-repeat;
  ${p=>Number(p.poke.id)?"background-size:auto;":"background-size:contain;"}
  border: 1px solid black;
  height: 100%;
`
let Types= styled.div`
   position :absolute;
   display: flex;
   gap: 0 2px;
   background-color: transparent;
   right: 0;
   padding: 0.5em;
   
`
let Icon= styled.div`
   background-image: url(${p=>p.icon});
   background-position: center;
   background-size: cover;
   background-repeat: no-repeat;
   padding: 1em;
   border-radius: 3em;
   box-shadow: 0px 0px 2px black;
   
`
let Name= styled.h5`
   color: white;
   font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
   position: absolute;
   top:-20px;
   font-size: 1em;
   padding: 0 1em;
   text-shadow:1px 1px 2px black;
`






export default function Card({ name, id, sprite,types}) {
    
    return (
        <Container types={types} > 
            <Link to={`/home/pokemons/${id}`}>
                 <InerCard poke={{id:id,sprite:`https://img.pokemondb.net/sprites/go/normal/${name}.png`,spr:sprite}}>
                    <Types>
                        {types?types.map(e=><Icon key={e} icon={require(`../../assets/iconsTypes/${e}.png`).default}/>):""}
                    </Types>
                    <Name>{name}</Name>
                    {/*<img style={{ maxWidth: "200px" }} loading="lazy" src={!Number(id) ? sprite : `https://img.pokemondb.net/sprites/go/normal/${name}.png`} alt={name} />*/}
                 </InerCard>                
            </Link>
        </Container>

    )


}