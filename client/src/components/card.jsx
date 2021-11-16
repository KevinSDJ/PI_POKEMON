import React from "react";







export default function Card({name,sprite,id}){
        //let pkImg=require(`../ani-front-shiny/${name}.gif`)
        //<img loading="lazy" src={pkImg.default} width="90px" alt={name}></img>
        return(
            <div style={{"margin":"0 5px","border":"1px solid black"}}> 
                <p> name:{name}</p> 
                <img loading="lazy" width="150px"  src={sprite} alt={name+"img"}/>    
            </div>
        )
    
    
}