import React, { useState, useEffect } from "react";
import { FormNwPoke } from "./formcreate";
import axios from 'axios';
import {useDispatch, useSelector} from 'react-redux'
import {getAllPokemon,reCharge} from '../../../actions/actions';
let hpokemongif = require('../../../assets/HuevoPokemon.gif')

export default function CreatePage() {
    const [data, setData] = useState({
        name: "",
        health: 0,
        defense: 0,
        strength: 0,
        speed: 0,
        height: 0,
        weight: 0,
        sprites: "",
        types: []
    })
    
    const [types, setTypes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [resp,setResp]=useState(null)
    const dispatch= useDispatch()
    const tps= useSelector(state=>state.types)

    useEffect(() => {
        if(types===null){
            axios.get('http://localhost:3001/home/types')
            .then(r => {
                r.data = r.data.slice(0, 18).map(e => {
                    return { id: e.id, name: e.name, icon: require(`../../../assets/iconsTypes/${e.name}.png`) }
                })
                setTypes(r.data)
                
            })
        }
        if(isLoading){
            setTimeout(() => {
            setIsLoading(!isLoading)
           }, (2000))
        }
        
        
    },[setTypes,types,isLoading])

    const checkData = (e) => {
        setData((prev) => {
            let d = { ...prev, [e.target.name]: !Number(e.target.value)?e.target.value:Number(e.target.value)}
            return d
        })
    }
    const handleClick = (e) => {
        if(data.types.length===2){
            alert("Max types select 2")
            return
        }
        if(data.types&& data.types.includes(Number(e.target.id))){
            setData((prev)=>{
                let r = { ...prev, [e.target.name]:data.types.filter(i=>i!==Number(e.target.id)) }
                return r
            })
        }else{
            setData((prev) => {
            let r = { ...prev, [e.target.name]: [...data.types,Number(e.target.id)] }
                return r
        })
        }

           
        } 

        let axiosConfig = {
            withCredentials: true,
          }
    
    const onSub =(e) => {
        e.preventDefault()
        console.log({ data })
        axios.post('http://localhost:3001/home/pokemons',data,axiosConfig)
        .then(r=>{
            setResp(r.data)
            dispatch(getAllPokemon())
            return "ok"
            
        })
        .then(e=>{
            dispatch(reCharge())
            setData({
            name: "",
            health: 0,
            defense: 0,
            strength: 0,
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