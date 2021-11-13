import styled from "styled-components";

const H1 = styled.h1`
  ${props =>props.padding? `padding:${props.padding}`:null};
  ${props => props.display ? `display:${props.display}` : ""};
  ${props => props.flexDirection ? `flex-direction:${props.flexDirection}` : ""};
  ${props => props.alignItems ? `align-items:${props.alignItems}` : ""};
  font-weight: ${props => props.fontWeight ? props.fontWeight : "400"};
  color:${props => props.color ? props.color : "black"};
  margin:${props=>props.margin? props.margin:"0"};
  font-size: ${props => props.fontSize ? props.fontSize : "2em"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;
`;
const P= styled.p`
  ${props =>props.padding? `padding:${props.padding}`:null};
  ${props => props.display ? `display:${props.display}` : ""};
  ${props => props.flexDirection ? `flex-direction:${props.flexDirection}` : ""};
  ${props => props.alignItems ? `align-items:${props.alignItems}` : ""};
  ${props=> props.a?`a{
    font-weight:600;
    text-decoration: none;
    outline: none;
    color:${props.a.color};
    ${props.a.hover?props.a.hover:null}
  }`:""};
  
  font-weight: ${props => props.fontWeight ? props.fontWeight : "300"};
  color:${props => props.color ? props.color : "black"};
  margin:${props=>props.margin? props.margin:"0"};
  font-size: ${props => props.fontSize ? props.fontSize : "13px"};
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu;
`;


export {H1,P};