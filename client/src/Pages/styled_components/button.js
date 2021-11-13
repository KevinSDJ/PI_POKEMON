import styled from "styled-components"


const BtnYellow = styled.button`
   width: ${p=>p.width?p.width:"190px"};
   font-family:Roboto, Oxygen, Ubuntu, Cantarell;
   padding:${p=>p.padding?p.padding:"0.4em 0.4em"};
   background-color:#FDFF35;
   border: 0.3px transparent;
   border-radius:${p=>p.br?p.br:"5px"};
   font-size:${p=>p.fontSize?p.fontSize:"18px"};
   font-weight:${p=>p.fontW?p.fontW:"600"};
   ${p=>p.color?`color:${p.color}`:`color:#2F4858`};
   a{
       text-decoration: none;
       outline: none;
       color:${p=>p.a?.color?p.a.color:"#2F4858"};
   }
`
const BtnCancel= styled.button`
   width: ${p=>p.width?p.width:"190px"};
   font-family:Roboto, Oxygen, Ubuntu, Cantarell;
   padding:${p=>p.padding?p.padding:"0.4em 0.4em"};
   background-color:#FFFFFF;
   border: 0.3px transparent;
   border-radius:${p=>p.br?p.br:"5px"};
   font-size:${p=>p.fontSize?p.fontSize:"18px"};
   font-weight:${p=>p.fontW?p.fontW:"600"};
   ${p=>p.color?`color:${p.color}`:`color:#2F4858;`};
   a{
       text-decoration: none;
       outline: none;
       color:${p=>p.color?p.color:"#2F4858"};
   }
`;
const BtnPerz= styled.button`
  ${p=>p.atributes.map(e=>e)};
`;



export {BtnYellow,BtnCancel,BtnPerz};