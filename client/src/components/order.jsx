import React, { useState,useEffect} from "react";
import { Div } from "../Pages/styled_components/containers";
import {useDispatch} from 'react-redux';
import {ordDef,ordDesc,ordAsc,ordTypePresen} from '../actions/actions'
let atr=["background-color:black;","color:white;","display:flex;","align-items:center;"]


export default function Order(props){
    const [status,setStatus]=useState(null);
    let dispatch = useDispatch()
    

    useEffect(()=>{
        if(status==="default"&&props.filStatus==="default"){
            dispatch(ordDef())
        }
        if(status==="default"&&props.filStatus!=="default"){
            dispatch(ordTypePresen(props.filStatus))
        }
        if(status==="desc"){
            dispatch(ordDesc("desc"))
        }
        if(status==="asc"){
            dispatch(ordAsc("asc"))
        }
    },[dispatch,status,props.filStatus])
    return(
        <Div atributes={atr}>
            Order By
            <select id="selOrd" name="select" onChange={(e)=>{
                setStatus(e.target.value)
                }}>
                <option defaultValue value="default">default</option>
                <option value="desc">desc</option>
                <option value="asc">asc</option>
            </select>
        </Div>
    )
}

