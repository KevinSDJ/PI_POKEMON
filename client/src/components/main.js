

import styled from "styled-components";
import bgImg from '../Pages/media/backgroundMain.png';





const Main= styled.div`
    background:radial-gradient(transparent,rgba(87, 117, 144,.4)),url(${bgImg});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    box-sizing:border-box;
    background-attachment: fixed;
    height: auto;
    min-height: 100vh;
    padding-top: 5rem;
    border:5px solid yellow;
    
    
`;


export {Main}


