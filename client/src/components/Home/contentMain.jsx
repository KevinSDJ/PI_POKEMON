import React, { useEffect, useState } from "react";
import Filter from "./filter.jsx";
import Order from "./order";
import { useDispatch, useSelector } from "react-redux";
import {  reCharge, setUser } from '../../actions/actions'
import CarDespl from "./cardDesplieg";
import { Redirect } from "react-router";
import styled from "styled-components";




let CMain = styled.div`
     background-color: rgba(198,39,100,0.5);
     display: flex;
     flex-direction: column;
     margin: 0 auto;
     box-sizing: border-box;
     
     `
const Div= styled.div`
     padding: 5px;
     display: flex;
     justify-content: space-around;
`

let atr2 = ["padding:5px;", "display:flex;", "justify-content: space-around;"]


export default function MainCont() {
    
    let us = useSelector(state => state.user)
    const [response, setResponse] = useState({ type: null, body: null })
    const [filStatus,setFilst]=useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(reCharge())
        if (us?.length < 1) {
            dispatch(setUser(setResponse))
        }        
    },[dispatch, us])
     
        if (response.type) {
            return (
                <Redirect to={response.body} />
            )
        } else {
            return (
                <CMain>
                    <Div atributes={atr2}>
                        <Filter setFilst={setFilst}/>
                        <Order filStatus={filStatus} />
                    </Div>
                    <CarDespl />
                </CMain>
            )
        }
}


