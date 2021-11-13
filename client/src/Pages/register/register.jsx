import React, { useState } from 'react';
import axios from 'axios';
import {Redirect} from 'react-router-dom';
import logo from '../media/Pokeball.png';
import Pokemon from '../media/PokemonReg.png';
import {ImgCont,Div} from '../styled_components/containers';
import {Form}  from '../styled_components/form';
import {BtnCancel, BtnYellow} from '../styled_components/button';

let atr=["background-color:#2F4858;","position:relative;","height:100vh;"]
let atr2=["position: relative;","margin:0 auto;","padding:10em 0 0 0;"]
export default function Register(){
  const [status,setState]= useState({
    username:"",
    email:"",
    password:"",
    image:""
  })
  const [red,setRed]= useState({rout:null})

  function onChange(e){
    setState(prev=>{
      let st= {...prev,[e.target.name]:e.target.value}
      return st
    })
  }
  function onSub(e){
    e.preventDefault()
    axios.post('http://localhost:3001/register',status)
      .then(resp=> setRed({rout:resp.data.redirect}))
    setTimeout(()=>{setState({username:"",email:"",password:""})},(3000))
  }


  if(red.rout){
    return(
      <Redirect  to={`${red.rout}`}/>
    )
  }else{
    return (
      <Div atributes={atr}>
          <ImgCont top={"20px"} left={"30px"} padding={"2em"} img={logo} position={"absolute"}/>
          <Div atributes={atr2}>
            <Form onSubmit={onSub} gap={"1em 0"} position={"relative"} autoComplete="off" >
                <ImgCont padding={"8em"} img={Pokemon} position={"absolute"} top={"-195px"} left={"5em"}/>
                <label for="username">
                   Username
                   <input  type="text" name="username" placeholder="username" required onChange={onChange} value={status.username} />
                </label>
                <label for="email">
                   Email
                    <input type="email" name="email" placeholder="email" required  onChange={onChange} value={status.email} />
                </label>
                <label for="password">
                   Password
                   <input type="password" name="password" placeholder="password" required  onChange={onChange} value={status.password} />
                </label>
                <label for="image">
                   Phote
                   <input type="text" name="image" placeholder="url_image" required  onChange={onChange} value={status.image}/>
                </label>
                <div><BtnYellow type="submit">create account</BtnYellow><BtnCancel type="button" onClick={()=>{
                  setRed({rout:"/"})
                }}>cancel</BtnCancel></div> 
            </Form>
          </Div>
        </Div>
    )
  }

};