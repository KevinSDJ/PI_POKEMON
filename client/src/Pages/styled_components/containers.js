import styled from "styled-components";


const Div = styled.div`
  ${p=>p.atributes.map(e=>e)};
`

const ImgCont = styled.div`
${props => props.z_index ? `z-index:${props.z_index}` : null};
${props => props.position ? `position:${props.position}` : null};
${props => props.left ? `left:${props.left}` : null};
${props => props.right ? `right:${props.right}`: null};
${props => props.top ? `top:${props.top}` : null};
${props=> props.width?`width:${props.width}`:null};
${props=> props.height?`height:${props.height}`:null};
background-image:url(${props => props ? props.img : null});
padding: ${props => props ? props.padding : "0"};
margin:0;
background-position: center;
border:1px transparent;
background-size:${p=>p?.bgSize?p.bgSize:"contain"};
background-repeat: no-repeat;
`;
const Nav=styled.nav`
   display: flex;
   background-color: transparent;
   border:1px solid cyan;
`;

export {ImgCont,Div,Nav};