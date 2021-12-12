import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";


let x_def=require('../../assets/userPerfil.png')

let Container=styled.div`
   background-image: url(${p=>p.image?p.image:x_def.default});
   position: absolute;
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   right: -30px;
   top: -5px;
   border-radius: 2.5em;
   border:3px solid grey;
   margin:0;
   padding: 1.7em;
   background-color:white;
`
let Display=styled.div`
    padding: 20px 20px;
    background-color: #2F4858;
    position: absolute;
    left: -60px;
    top: 40px;
    z-index: -2;
    border-bottom-left-radius:2em;
    border-bottom-right-radius: 2em;
    animation-name: l;
    animation-duration: 500ms;
    color:#FDFF35;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    @keyframes l{
        0%{
            opacity: 0%;
        }
        25%{
            opacity: 25%;
        }
        50%{
            opacity: 50%;
        }
        75%{
            opacity: 75%;
        }
        100%{
            opacity:100%;
        }
    }
`
function ent(e){
    document.getElementById("avatar_dis").hidden=false
}
function out(e){
    document.getElementById("avatar_dis").hidden=true
}

export const Avatar=()=>{
    let user= useSelector(state=>state.user)

    return(
        <Container image={user[0]?.image} onMouseOver={ent} onMouseOut={out}>
             <Display id="avatar_dis" hidden>
                <h5>My perfil</h5>
                <h5>Logeout</h5>
             </Display>
        </Container>
    )
}