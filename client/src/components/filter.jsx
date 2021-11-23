import React, { useEffect, useState } from "react";
import {useDispatch} from 'react-redux';
import styled from "styled-components";
import {filTypes,filUs,filExist,filtDef} from '../actions/actions';


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
let Cont= styled.div`
   background-color: blue;
   color: white;
   display: flex;
   align-items: center;
`

export default function Filter(props) {
    const [types,setTypes] = useState(null)
    const [checkUser,setCheckUs]= useState(false)
    const [checkEx,setCheckEx]= useState(false)
    const dispatch = useDispatch()
  

    useEffect(() => {
        if (types!== null&&types!=="default") {
             dispatch(filTypes(types))
        }
        if(types==="default"){
             dispatch(filtDef())
        }
        if (checkUser&&!checkEx){
             dispatch(filUs())
        }
        if(checkEx&&!checkUser){
            dispatch(filExist())
        }
    }, [dispatch,types,checkEx,checkUser])

    function onCh(e){
        console.log(e.target.value)
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
             props.setFilst(e.target.value)
        }
    }
    
    
    return (
        <Cont>
            filter
            <form onChange={onCh}>
                <label htmlFor="types">
                    By types:
                    <Select id="types" name="types">
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
                <label htmlFor="byUser">
                    By User:
                    <input id="byUser" name="byUser-existing" type="checkbox" checked={checkUser} onChange={onCh}  />
                </label>
                <label htmlFor="existing" >
                    Existing:
                    <input id="existing" name="byUser-existing" type="checkbox" checked={checkEx} onChange={onCh}/>
                </label>
            </form>


        </Cont>
    )
}


