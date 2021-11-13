import React from "react";
import {Link} from 'react-router-dom';
import logo from '../media/Pokeball.png';
import logoHenry from '../media/logoHenry 1.png';
import bgImg from '../media/Daco.png';
import {BtnYellow} from '../styled_components/button';
import {Div,ImgCont} from '../styled_components/containers';
import {H1,P} from '../styled_components/text';



let div1=["animation-name:vis;","animation-duration:1s;",`@keyframes vis {0%{opacity: 0;}50%{opacity: 50%;}100%{opacity:100%;}};`,"position:relative;","height:100vh;","background-color:#2F4858;"]
let div2=["padding:2em 0;","display:flex;","flex-direction: column;"," gap:2em 0;","align-items: center;"]

export default function Welcome() {
  
  return (
    <Div atributes={div1}>
      <ImgCont top={"20px"} left={"30px"} padding={"2em"} img={logo} position={"absolute"}/>
        <Div atributes={div2}>
            <H1 fontSize={"20px"} color={"white"} display={"flex"} alignItems={"center"} padding={"0"} fontWeight={"400"}>
                Welcome to
              <H1 fontSize={"2.5em"} color={"#FDFF35"} margin={"0 10px 0 20px"} fontWeight={"500"}>PokeApp</H1>
               <ImgCont padding={"1em"} img={logoHenry}></ImgCont>
            </H1>
            <ImgCont img={bgImg} height={"25em"} width={"40em"} />
            <BtnYellow><Link to="/register" >create account</Link></BtnYellow>
            <P fontSize={"16px"} color={"white"} a={{color:"#FDFF35",hover:"&:hover{color:#8102FF};"}}>
             Already an account?<Link to="/login">Click</Link></P>
      </Div>
      
    </Div>
  )
}