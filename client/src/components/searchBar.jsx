import React, { useState } from 'react';
import axios from 'axios';
import {FormSearch} from '../Pages/styled_components/searchStyled';
import icon from '../Pages/media/Isearch.png';
import styled from 'styled-components';
import { BtnPerz } from '../Pages/styled_components/button';


let atr=["backgroundcolor:grey;","opacity: 1%;"]

let Inp= styled.input`
  width: 100px;
  box-sizing: border-box;
  border: 1px transparent;
  border-radius: 4em;
  font-size: 18px;
  background-color: white;
  background-image: url(${icon});
  background-size: contain;
  background-repeat: no-repeat;
  padding: 5px 0 5px 30px;
  outline: none;
  transition: width 0.4s ease-in-out;
  &:focus{
      width:20em;
  }
  
`;

export default function Search(){
    const [state,setState]=useState({search:""});
    const [resp,setResp]=useState("");
   
    function onChange(e){
        setState(prev=>{
            let s={...prev,[e.target.name]:e.target.value}
            return s
        })
    }
    function onSub(e){
        e.preventDefault();
        console.log(state)
            if(state.search){
               axios.get(`http://localhost:3001/home/pokemons?name=${state.name}`)
                .then(res=> setResp(res.data))
                console.log(resp)
                setTimeout(()=>{setState({search:""});document.getElementById("search").value=""},(2000))
            }
        
    }
   
    return (
        <FormSearch onSubmit={onSub} autoComplete="off">
         <Inp id="search" type="search" name="search" placeholder="search" required onChange={onChange} onKeyPress={(e)=>{
             if(e.key==="Enter"){
                 return document.getElementById("submit").click()
             }
         }} value={state.search}/>
         <BtnPerz id="submit" type="submit" atributes={atr}></BtnPerz>
        </FormSearch>
    )
}





