import React, { useEffect, useState } from "react";
import { Div } from "../Pages/styled_components/containers";
import { connect } from 'react-redux';
import styled from "styled-components";
import {filTypes,filUs,filExist} from '../actions/actions';

let atr = ["background-color:blue;", "color:white;", "display:flex;", "align-items:center;"]
let Select=styled.select`
display: inline-block;
border: 1px transparent;
border-radius: 4px;
option{
    border-radius: 4px;
    background-color: lightgray;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
}
outline: none;
padding: 5px;
`
let id=2
export function Filter(props) {
    const [types,setTypes] = useState(null)
    const [checkUser,setCheckUs]= useState(false)
    const [checkEx,setCheckEx]= useState(false)
    const dispatch = props.dispatch

    useEffect(() => {
        if (types!== null) {
            dispatch(filTypes(props.pokemons, types))
        }
        if (checkUser&&!checkEx){
            dispatch(filUs(props.pokemons,id))
        }
        if(checkEx&&!checkUser){
            dispatch(filExist())
        }
    }, [dispatch,types, props.pokemons,checkEx,checkUser])

    function onCh(e){
        if(e.target.id==="byUser"){
            if(checkUser===true){
                setCheckUs(!checkUser)
            }
            setCheckUs(!checkUser)
            setCheckEx(false)
        }
        if(e.target.id==="existing"){
            if(checkEx===true){
                setCheckEx(!checkEx)
            }
            setCheckEx(!checkEx)
            setCheckUs(false)
        }
        if(e.target.id==="types"){
            setTypes(e.target.value)
            props.setSt(e.target.value)
        }
    }
    function check(e){
        console.log(checkUser+" "+ checkEx)
    }
    return (
        <Div atributes={atr}>
            filter
            <form onChange={check}>
                <label for="types">
                    By types:
                    <Select id="types" name="types" onChange={onCh} autoFocus>
                       <option value="default">default</option>
                       <option value="normal">normal</option>
                       <option value="fighting">fighting</option>
                       <option value="flying">flying</option>
                       <option value="poison">poison</option>
                       <option value="ground">ground</option>
                       <option value="rock">rock</option>
                       <option value="bug">bug</option>
                       <option value="ghost">ghost</option>
                       <option value="steel">steel</option>
                       <option value="fire">fire</option>
                       <option value="water">water</option>
                       <option value="grass">grass</option>
                       <option value="electric">electric</option>
                       <option value="ice">ice</option>
                       <option value="dragon">dragon</option>
                       <option value="dark">dark</option>
                       <option value="fairy">fairy</option>
                       <option value="unknown">unknown</option>
                       <option value="shadow">shadow</option>

                    </Select>
                </label>
                <label for="byUser">
                    By User:
                    <input id="byUser" name="byUser-existing" type="checkbox" checked={checkUser} onChange={onCh}  />
                </label>
                <label for="existing" >
                    Existing:
                    <input id="existing" name="byUser-existing" type="checkbox" checked={checkEx} onChange={onCh}/>
                </label>
            </form>


        </Div>
    )
}


function mapStateToProps(state) {
    return {
        pokemons: state.pokemons,
        pokemonsInUse: state.pokemonsInUse
    };
}

export default connect(mapStateToProps)(Filter);