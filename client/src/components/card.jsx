import React from "react";





export default function Card({name,sprite,id}){
        //let pkImg=require(`../images/${name}.gif`)
        return(
            <div style={{"margin":"0 5px","border":"1px solid black"}}> 
                <p> name:{name}</p> 
                <img loading="lazy" src={sprite} width="50px" alt={name}></img>
                
            </div>
        )
    
    
}