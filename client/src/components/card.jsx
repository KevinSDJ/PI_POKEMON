import React from "react";
import { Link } from "react-router-dom";







export default function Card({ name, id }) {
    //let pkImg=require(`../ani-front-shiny/${name}.gif`)
    //<img loading="lazy" src={pkImg.default} width="90px" alt={name}></img>
    return (
        <Link to={`/home/pokemons/${id}`}>
            <div style={{ "margin": "0 5px", "border": "1px solid black" }}>
                <p> name:{name}</p>
                <img loading="lazy" src={`https://img.pokemondb.net/sprites/go/normal/${name}.png`} alt={name} />
            </div>
        </Link>
    )


}