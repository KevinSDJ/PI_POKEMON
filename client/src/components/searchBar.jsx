import React, { useState } from 'react';
import axios from 'axios';
import {FormSearch} from '../Pages/styled_components/searchStyled';
import {ImgCont} from '../Pages/styled_components/containers';
import icon from '../Pages/media/Isearch.png';
import {BtnPerz} from '../Pages/styled_components/button';



let atrBtn=["background:white;","border:none;","padding:0;","margin:0;","border-bottom-right-radius:2em;","border-top-right-radius:2em;"]


export default function Search(){
    const [state,setState]=useState({});
    const [resp,setResp]=useState("");
    const [type,setType]=useState({type:"name"})
    function onChange(e){
        setState(prev=>{
            let s={...prev,[e.target.name]:e.target.value}
            return s
        })
    }
    function onSub(e){
        e.preventDefault();
            if(state.name&&!state.id){
               axios.get(`http://localhost:3001/home/pokemons?name=${state.name}`)
                .then(res=> setResp(res.data))
                console.log(resp)
                setTimeout(()=>{setState({name:"",id:""});document.getElementById("search").value=""},(2000))
            }
    }
   
    return (
        <FormSearch onSubmit={onSub} autoComplete="off">
         <input id="search" type="search" name={type.type} placeholder="search by name" required onChange={onChange} />
         <BtnPerz type="submit" atributes={atrBtn}>
             <ImgCont img={icon} padding={"1em"} margin={"0"} bgSize={"cover"}/>
         </BtnPerz>
         <select name="select" onChange={(e)=>setType({type:e.target.value})} hidden>
            <option value="name" defaultValue>name</option>
            <option value="id" >id</option>
         </select>
        </FormSearch>
    )
}





