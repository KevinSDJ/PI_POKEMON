import React from "react";
import styled from 'styled-components';



let Form = styled.form`
   background-color: lightgray;
`
let IconBtn= styled.button`
   background-image: url(${p=>p.icon?p.icon:null});
   background-position: center;
   background-size: cover;
   padding: 20px 20px;
   background-repeat: no-repeat;
   border: 5px solid ${p=>p.color?p.color:"black"};
   border-radius: 9em;
   background-color: grey;
`

export const FormNwPoke = (props) => {
    let color="grey";
   
   
    return (
        <Form onSubmit={props.d.onSub}>
            <fieldset>
                <legend>New Pokemon</legend>
                <p>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="name" defaultValue={props.d.name} onChange={props.d.checkData} required />
                </p>
                <p>
                    <label htmlFor="height">Height</label>
                    <input id="height" name="height" type="range" min={1} max={1000} defaultValue={props.d.height} onChange={props.d.checkData} required /><span>{props.d.height}</span>
                </p>
                <p>
                    <label htmlFor="weight">Weight</label>
                    <input id="weight" name="weight" type="range" min={1} max={1000} defaultValue={props.d.weight} onChange={props.d.checkData} required /><span>{props.d.weight}</span>
                </p>
                <p>
                    <label htmlFor="health">Health</label>
                    <input id="health" name="health" type="range" min={1} max={1000} defaultValue={props.d.health} onChange={props.d.checkData} required /><span>{props.d.health}</span>
                </p>
                <p>
                    <label htmlFor="defense">Defense</label>
                    <input id="defense" name="defense" type="range" min={0} max={1000} defaultValue={props.d.defense} onChange={props.d.checkData} required /><span>{props.d.defense}</span>
                </p>
                <p>
                    <label htmlFor="strength">Strength</label>
                    <input id="strength" name="strength" type="range" min={0} max={1000} defaultValue={props.d.strength} onChange={props.d.checkData} required /><span>{props.d.strength}</span>
                </p>
                <p>
                    <label htmlFor="speed">Speed</label>
                    <input id="speed" name="speed" type="range" min={0} max={1000} defaultValue={props.d.speed} onChange={props.d.checkData} required /><span>{props.d.speed}</span>
                </p>
                <p>
                    <label htmlFor="sprite">Image</label>
                    <input id="sprites" name="sprites" type="text" placeholder="url_image" defaultValue={props.d.sprites} onChange={props.d.checkData} required />
                </p>
                <div>
                    {props.d.types?props.d.types.map(e=><IconBtn id={e.id} key={e.name} name="types" type="button" onClick={props.d.handleClick} icon={e.icon.default} color={color}/>):""}
                </div>
                <div><button type="submit" >create</button>{"|"}<button>cancel</button></div>
            </fieldset>

        </Form>
    )
}