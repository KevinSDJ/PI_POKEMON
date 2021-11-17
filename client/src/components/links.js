import React from "react";
import {Div} from '../Pages/styled_components/containers'
import {Link} from 'react-router-dom';
let links=[{title:"New Pokemon",route:"/home/create/"},{title:"About",route:"/home/about"}]
let efect=`
   a{
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    text-decoration:none;
    outline:none;
    color:#ffff;
    font-size:1.2em;
    padding:0.5em 1em;
    transition: 500ms;
    &:hover{
        background-color:rgba(87, 117, 144,.4);
        color:#FDFF35;
    };
   };
  `
let atr=["display:flex;",efect]
export default function Links(){
    return (
        <Div atributes={atr}>
            {links.map(l=> <Link key={l.title} to={l.route}>{l.title}</Link>)}
        </Div>
    )
}