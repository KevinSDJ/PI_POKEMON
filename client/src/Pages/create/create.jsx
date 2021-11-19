import React, { useState } from "react";



export default function CreatePage(){
    const [data,setData]=useState({
        name:"",
        health:0,
        defense:0,
        strength:0,
        speed:0,
        height:0,
        weight:0,
        sprite:""
    })

    const checkData=(e)=>{
        setData((prev)=>{
            let d={...prev,[e.target.name]:e.target.value}
            return d
        })
    }
    const onSub=(e)=>{
        e.preventDefault()
        console.log({data})
        setData({
            name:"",
            health:0,
            defense:0,
            strength:0,
            speed:0,
            height:0,
            weight:0,
            sprite:""
        })
    }
    
    return (
        <div style={{"display":"flex"}}>
            <form onSubmit={onSub}>
                <fieldset>
                    <legend>New Pokemon</legend>
                    <p> 
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" type="text" placeholder="name" defaultValue={data.name} onChange={checkData} required/>
                    </p>
                    <p>
                        <label htmlFor="height">Height</label>
                        <input id="height" name="height" type="range" min={1} max={1000} defaultValue={data.height} onChange={checkData} required/><span>{data.height}</span>
                    </p>
                    <p>
                        <label htmlFor="weight">Weight</label>
                        <input id="weight" name="weight" type="range" min={1} max={1000} defaultValue={data.weight} onChange={checkData} required/><span>{data.weight}</span>
                    </p>
                    <p>
                        <label htmlFor="health">Health</label>
                        <input id="health" name="health" type="range" min={1} max={1000} defaultValue={data.health} onChange={checkData} required/><span>{data.health}</span>
                    </p>
                    <p>
                        <label htmlFor="defense">Defense</label>
                        <input id="defense" name="defense" type="range" min={0} max={1000} defaultValue={data.defense} onChange={checkData} required/><span>{data.defense}</span>
                    </p>
                    <p>
                        <label htmlFor="strength">Strength</label>
                        <input id="strength" name="strength" type="range" min={0} max={1000} defaultValue={data.strength} onChange={checkData} required/><span>{data.strength}</span>
                    </p>
                    <p>
                        <label htmlFor="speed">Speed</label>
                        <input id="speed" name="speed" type="range" min={0} max={1000} defaultValue={data.speed} onChange={checkData} required/><span>{data.speed}</span>
                    </p>
                    <p>
                        <label htmlFor="sprite">Image</label>
                        <input id="sprite" name="sprite" type="tex" placeholder="url_image"  defaultValue={data.sprite} onChange={checkData} required/>
                    </p>
                    <div><button type="submit">create</button>{"|"}<button>cancel</button></div>
                </fieldset>
            </form>
            <div>
                <p>{data.name}</p>
                <p>{data.defense}</p>
                <img src={data.sprite} alt={data.name}/>
            </div>
        </div>
    )
}