import React, { useState,useEffect} from "react";
import { Div } from "../../Pages/styled_components/containers";
import {useDispatch} from 'react-redux';
import {reCharge,orderDesc,orderAsc} from '../../actions/actions'
let atr=["background-color:black;","color:white;","display:flex;","align-items:center;"]


export default function Order(props){
    const [status,setStatus]=useState(null);
    let dispatch = useDispatch()
    

    useEffect(()=>{
        if(status==="default"){
            dispatch(reCharge())
        }else if(status==="desc"){
            dispatch(orderDesc())
        }else if(status==="asc"){
            dispatch(orderAsc())
        }
    },[dispatch,status])
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

