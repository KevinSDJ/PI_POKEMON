import React, { useState } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import {Div,ImgCont} from '../styled_components/containers';
import {Form} from '../styled_components/form';
import {BtnYellow,BtnCancel} from '../styled_components/button';
import logo from '../media/Pokeball.png';
import Pokemon from '../media/PokemonLog.png';


let atr=["background-color:#2F4858;","position:relative;","height:100vh;"]
let atr2=["position: relative;","margin:0 auto;","padding:14em 0 0 0;"]

export default function Login() {
    const [resp, setResp] = useState({ rout: null });
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
        e.preventDefault()
        axios.post('http://localhost:3001/login',data)
          .then(resp=> setResp({rout:resp.data.redirect}))
        setTimeout(()=>{setData({email:"",password:""})},(3000))
      }
    if (resp?.rout) {
        return (
            <Redirect path={`${resp.rout}`} />
        )
    } else {
        return (
            <Div atributes={atr}>
          <ImgCont top={"20px"} left={"30px"} padding={"2em"} img={logo} position={"absolute"}/>
          <Div atributes={atr2}>
            <Form onSubmit={onSub} gap={"1em 0"} position={"relative"} autoComplete="off" >
                <ImgCont padding={"8em"} img={Pokemon} position={"absolute"} top={"-240px"} left={"5em"}/>
                <label for="email">
                   Email
                    <input type="email" name="email" placeholder="email" required  onChange={onChange} value={data.email} />
                </label>
                <label for="password">
                   Password
                   <input type="password" name="password" placeholder="password" required  onChange={onChange} value={data.password} />
                </label>
                <div><BtnYellow type="submit">login</BtnYellow><BtnCancel type="button" onClick={()=>{
                  setResp({rout:"/"})
                }}>cancel</BtnCancel></div> 
            </Form>
          </Div>
        </Div>
        )
    }
}