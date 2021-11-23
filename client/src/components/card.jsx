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
   width: 15em;
   height: 15em;
   box-sizing: border-box;
   ${p=>p.types?.length<2?`background-color:${colorsType[p.types[0]]};`:`background: linear-gradient(180deg,${colorsType[p.types[0]]},${colorsType[p.types[1]]});`}
`
let InerCard= styled.div`
  background-image: url(${p=>p.sprite?p.sprite:null});
  background-position: center;
  background-repeat: no-repeat;
  background-size: auto;
  border: 1px solid black;
  height: 100%;
`






export default function Card({ name, id, sprite,types}) {

    return (
        <Container types={types} > 
            <Link to={`/home/pokemons/${id}`}>
                <InerCard sprite={`https://img.pokemondb.net/sprites/go/normal/${name}.png`}>
                    <h5>{name}</h5>
                    {/*<img style={{ maxWidth: "200px" }} loading="lazy" src={!Number(id) ? sprite : `https://img.pokemondb.net/sprites/go/normal/${name}.png`} alt={name} />*/}

                </InerCard>
            </Link>
        </Container>

    )


}