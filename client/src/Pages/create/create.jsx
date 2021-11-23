import React, { useState, useEffect } from "react";
import { FormNwPoke } from "./component/formcreate";
import axios from 'axios';
import {useDispatch} from 'react-redux'
import {getAllPokemon,reCharge} from '../../actions/actions';
let hpokemongif = require('../media/HuevoPokemon.gif')

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
    const dispatch= useDispatch()
    const [types, setTypes] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [resp,setResp]=useState(null)

    useEffect(() => {
        axios.get('http://localhost:3001/home/types')
            .then(r => {
                r.data = r.data.slice(0, 18).map(e => {
                    return { id: e.id, name: e.name, icon: require(`../media/iconsTypes/${e.name}.png`) }
                })
                setTypes(r.data)
                
            })
    }, [setTypes])

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
            setTimeout(()=>{
                dispatch(reCharge())
            },(2000))
        })
        
        
        setTimeout(()=>{
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
        d= {
            handleClick,
            types:types,
            checkData,
            onSub,
            name: "",
            health: "",
            defense: "",
            strength: "",
            speed:"",
            height:"",
            weight: "",
            sprites: ""
    
        }
        },(1000))
        
    }
    let d = {
        handleClick,
        types: types,
        checkData,
        onSub,
        name: data.name,
        health: data.health,
        defense: data.defense,
        strength: data.strength,
        speed: data.speed,
        height: data.height,
        weight: data.weight,
        sprites: data.sprites

    }
    if (isLoading) {
        setTimeout(() => {
            setIsLoading(!isLoading)
        }, (2000))
        return (
            <img src={hpokemongif.default} alt="huevo_gif" />
        )
    } else {
        return (
            <FormNwPoke d={d}>

            </FormNwPoke>
        )
    }

}