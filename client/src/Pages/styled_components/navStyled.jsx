import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/searchBar";
import { Nav1 } from './headStyled';
import { Div, ImgCont } from './containers';
import { H1 } from './text';
import logo from '../media/Pokeball.png'
import Links from "../../components/links";

let atri2 = ["position:absolute;", "padding:1.7em;", "background-color:white;", "right:-30px;", "top:-5px;", "border-radius:2.5em;", "border:1px solid grey;"]
let atri = ["position:relative;", "display:flex;", "justify-content:space-around;", "background-color:#2F4858;", "border-radius:0.5em;", "align-items: center;", "width:90vw;", "margin:0 auto;"]
export default function Nav() {

    return (
            <Nav1>
                <Div atributes={atri} >
                    <ImgCont top={"-10px"} left={"-30px"} padding={"2em"} img={logo} position={"absolute"} />
                    <Link to="/home"><H1 color={"#FFFFFF"} padding={"0.2em"}>
                        Pokemon App
                    </H1>
                    </Link>
                    <Search />
                    <Links />
                    <Div atributes={atri2} />
                </Div>
            </Nav1>

    )
}