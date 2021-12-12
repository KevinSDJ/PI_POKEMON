import React from "react";
import styled from "styled-components";

const Container = styled.div`
    height: 100vh;
    width: 100vw;
    font-family: Helvetica;
    background-color:#2F4858;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;

`
const Loader = styled.div`
  height:  20px;
  width: 250px ;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  
   

  & >.text{
       position: absolute;
       top: 0;
       left: 0;
       right: 0;
       width: 8rem;
       margin: auto;
       color:#fff;
       font-size: 2em;
        &:after{
            content: "Loading";      
            font-weight: bold;
            animation-name:loading-text;
            animation-duration: 3s;
            animation-iteration-count: infinite;
        }

  }


  
@keyframes loading-text{
    0%{
       content: "Loading";
    } 
    25%{
       content: "Loading."
    } 
    50%{
       content: "Loading.."
    }  
    75%{
       content: "Loading..."
    }
    
}
  
`
const Lod = styled.div`
`

export const Loading = () => {
    let l = require('../assets/8TEbqnaec.gif')
    return (
        <Container>
            <Loader>
                <img loading="lazy"  style={{"position":"absolute","top":"-250px","margin":"0 auto","left":"40px"}} width="200px" src={l.default} alt="cute_pikachu"/>
                <Lod className="loader text"/>
            </Loader>
        </Container>
    )
}