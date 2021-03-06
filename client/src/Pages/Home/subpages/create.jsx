import React, { useState, useEffect } from "react";
import { FormNwPoke } from "./formcreate";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {getAllPokemon,reCharge} from '../../../actions/actions';
let hpokemongif = require('../../../assets/HuevoPokemon.gif')

export default function CreatePage() {
    const [data, setData] = useState({
        name: "",
        hp: 0,
        defense: 0,
        attack: 0,
        special_attack:0,
        special_defense:0,
        speed: 0,
        height: 0,
        weight: 0,
        sprites: "",
        types: []
    })
    let  typs= useSelector(state=> state.types)
    const [types, setTypes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [resp,setResp]=useState(null)
    const dispatch= useDispatch()
    const tps= useSelector(state=>state.types)

    useEffect(() => {
        if(types===null){
            let t=typs.map(e => {return { id: e.id, name: e.name, icon: require(`../../../assets/iconsTypes/${e.name}.png`)}});
            setTypes(t)
        }
        if(isLoading){
            setTimeout(() => {
            setIsLoading(!isLoading)
           }, (2000))
        }
        
        
    },[setTypes, types, isLoading, typs])

    const checkData = (e) => {
        setData((prev) => {
            return { ...prev, [e.target.name]: !Number(e.target.value)?e.target.value:Number(e.target.value)}
        })
    }
    const handleClick = (e) => {
        if(data.types.length===2){
            alert("Max types select 2")
            return
        }
        if(data.types&& data.types.includes(Number(e.target.id))){
            setData((prev)=>{
                return { ...prev, [e.target.name]:data.types.filter(i=>i!==Number(e.target.id)) }
               
            })
        }else{
            setData((prev) => {
             return { ...prev, [e.target.name]: [...data.types,Number(e.target.id)] }
            
        })
        }

           
        } 

    
    const onSub =(e) => {
        e.preventDefault()
        console.log({ data })
        axios.post('http://localhost:3001/home/pokemons',data,{withCredentials:true})
        .then(r=>{
            setResp(r.data)
            dispatch(getAllPokemon())
            return "ok"
            
        })
        .then(e=>{
            dispatch(reCharge())
            setData({
            name: "",
            hp: 0,
            defense: 0,
            attack: 0,
            special_attack:0,
            special_defense:0,
            speed: 0,
            height: 0,
            weight: 0,
            sprite: "",
            types:[]
        })
        })
    }
       
   
    if (isLoading) {
      
        return (
            <img src={hpokemongif.default} alt="huevo_gif" />
        )
    } else {
        return (
            <FormNwPoke data={data} types={tps} onSub={onSub} handleClick={handleClick} checkData={checkData}>

            </FormNwPoke>
        )
    }
}