import React, { useEffect, useState } from "react";
import Filter from "../components/filter";
import Order from "../components/order";
import { useDispatch, useSelector } from "react-redux";
import { reCharge, setUser } from '../actions/actions'
import CarDespl from "./cardDesplieg";
import { Redirect } from "react-router";
import { Loading } from "./loading";
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
    let pokms = useSelector(state => state.pokemonsInUse)
    let us = useSelector(state => state.user)
    const [response, setResponse] = useState({ type: null, body: null })
    const [isLoading, setIsloading] = useState(true)
    const [filStatus,setFilst]=useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        
        if (us?.length < 1) {
            dispatch(setUser(setResponse))
        }
        if (pokms.length < 1) {
            dispatch(reCharge())

        }
        setTimeout(() => {
            setIsloading(false)
        }, (2000))
        clearTimeout()
        
    },[pokms, dispatch, us])
     


    if (isLoading) {
        return (
            <Loading />
        )
    } else {
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


}


