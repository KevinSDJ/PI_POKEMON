import React, { useState} from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {Div,ImgCont} from '../styled_components/containers';
import {Form} from '../styled_components/form';
import {BtnYellow,BtnCancel} from '../styled_components/button';
import logo from '../../assets/Pokeball.png';
import Pokemon from '../../assets/PokemonLog.png';
import {Loading} from '../../components/loading';


let atr=["background-color:#2F4858;","position:relative;","height:100vh;"]
let atr2=["position: relative;","margin:0 auto;","padding:14em 0 0 0;"]

export default function Login() {
    const [respuesta,setResp] = useState({type:null,body:null});
    const [isLoading,setIsLoading]= useState(true)
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    
   

    function onChange(e) {
        setData(prev => {
            let st = { ...prev, [e.target.name]: e.target.value }
            return st
        })
    }
   
    function onSub(e){
      (async function(){
        e.preventDefault()
        let axiosConfig = {
          withCredentials: true,
        }
        let send=await axios.post('http://localhost:3001/login',data,axiosConfig)   
        setData({email:"",password:""})
        setResp(send.data)
      })()
      }
    
    if (respuesta.type) {
        if(isLoading){
          setTimeout(()=>{
            setIsLoading(!isLoading)},(2000))
          return(<Loading/>)
        }else{
          return (<Redirect to={`${respuesta.body}`}/>)
        } 
    }else{
        return (
            <Div atributes={atr}>
          <ImgCont top={"20px"} left={"30px"} padding={"2em"} img={logo} position={"absolute"}/>
          <Div atributes={atr2}>
            <Form onSubmit={onSub} gap={"1em 0"} position={"relative"} autoComplete="off" >
                <ImgCont padding={"8em"} img={Pokemon} position={"absolute"} top={"-240px"} left={"5em"}/>
                <label htmlFor="email">
                   Email
                    <input type="email" name="email" placeholder="email" required  onChange={onChange} value={data.email} />
                </label>
                <label htmlFor="password">
                   Password
                   <input type="password" name="password" placeholder="password" required  onChange={onChange} value={data.password} />
                </label>
                <div><BtnYellow type="submit">login</BtnYellow><BtnCancel type="button" onClick={()=>{
                  setResp({type:"redirect",body:"/"})
                }}>cancel</BtnCancel></div> 
            </Form>
          </Div>
        </Div>
        )
    }
}