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
        <Form onSubmit={props.onSub}>
            <fieldset>
                <legend>New Pokemon</legend>
                <p>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="name" defaultValue={props.data.name} onChange={props.checkData} required />
                </p>
                <p>
                    <label htmlFor="height">Height</label>
                    <input id="height" name="height" type="range" min={1} max={1000} defaultValue={props.data.height} onChange={props.checkData} required /><span>{props.data.height}</span>
                </p>
                <p>
                    <label htmlFor="weight">Weight</label>
                    <input id="weight" name="weight" type="range" min={1} max={1000} defaultValue={props.data.weight} onChange={props.checkData} required /><span>{props.data.weight}</span>
                </p>
                <p>
                    <label htmlFor="hp">Hp</label>
                    <input id="hp" name="hp" type="range" min={1} max={1000} defaultValue={props.data.hp} onChange={props.checkData} required /><span>{props.data.hp}</span>
                </p>
                <p>
                    <label htmlFor="defense">Defense</label>
                    <input id="defense" name="defense" type="range" min={0} max={1000} defaultValue={props.data.defense} onChange={props.checkData} required /><span>{props.data.defense}</span>
                </p>
                <p>
                    <label htmlFor="attack">Attack</label>
                    <input id="attack" name="attack" type="range" min={0} max={1000} defaultValue={props.data.attack} onChange={props.checkData} required /><span>{props.data.attack}</span>
                </p>
                <p>
                    <label htmlFor="special_attack">Special_attack</label>
                    <input id="special_attack" name="special_attack" type="range" min={0} max={1000} defaultValue={props.data.special_attack} onChange={props.checkData} required /><span>{props.data.special_attack}</span>
                </p>
                <p>
                    <label htmlFor="special_defense">Special_defense</label>
                    <input id="special_defense" name="special_defense" type="range" min={0} max={1000} defaultValue={props.data.special_defense} onChange={props.checkData} required/><span>{props.data.special_defense}</span>
                </p>
                <p>
                    <label htmlFor="speed">Speed</label>
                    <input id="speed" name="speed" type="range" min={1} max={1000} defaultValue={props.data.speed} onChange={props.checkData} required /><span>{props.data.speed}</span>
                </p>
                <p>
                    <label htmlFor="sprite">Image</label>
                    <input id="sprites" name="sprites" type="text" placeholder="url_image" defaultValue={props.data.sprites} onChange={props.checkData} required />
                </p>
                <div>
                    {props.types?props.types.map(e=><IconBtn id={e.id} key={e.name} name="types" type="button" onClick={props.handleClick} icon={e.icon} color={color}/>):""}
                </div>
                <div><button type="submit" >create</button>{"|"}<button>cancel</button></div>
            </fieldset>

        </Form>
    )
}