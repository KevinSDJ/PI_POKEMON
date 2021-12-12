import styled from 'styled-components';

export const Content= styled.div`
     display: flex;
     box-sizing:border-box;
     justify-content:space-evenly;
     padding:2em 1em;
     margin:auto 2em;
     background-color:rgba(47, 72, 88, 0.4);
     height:80vh;
     backdrop-filter: blur(15px);
     border-radius:8px;
`

export const Img= styled.div`
   box-sizing:border-box;
   background-image:url(${props=>props.image});
   background-position:center;
   background-size:contain;
   background-repeat:no-repeat;
   width:25%;
`
export const CharCont= styled.div`
     width:30%;
     height:fit-content;
     background-color:white;
     border-radius:8px;
`
export const DataCont= styled.div`
      width:25%;
      font-family:Roboto;
      h1{
         color:lightgray;
         font-size:3.5em;
      }
      h6{
         color:white;
         font-size:1.5em;
         margin-top:1em;
         margin-bottom:5px;
      }
      p{
         font-size:1.5em;
         margin:0 auto;
         color:lightgray;
         font-weight:700;
         text-shadow:0 0 2px black;
      }
`





