import React from "react";
import { Link } from "react-router-dom";
import Search from "../../components/Home/searchBar";
import { Nav1 } from './headStyled';
import { Div, ImgCont } from './containers';
import logo from '../../assets/Pokeball.png'
import Links from "../../components/Home/links";
import { Avatar } from "../../components/Home/avatar";
import styled from "styled-components";
let H1= styled.h1`
    color: #fff;
    padding: 0.2em;
    margin: 0;
   
`
let atri = ["position:relative;", "display:flex;", "justify-content:space-around;", "background-color:#2F4858;", "border-radius:0.5em;", "align-items: center;", "width:90vw;", "margin:0 auto;"]

export default function Nav() {

    return (
            <Nav1>
                <Div atributes={atri}>
                    <ImgCont top={"-10px"} left={"-30px"} padding={"2em"} img={logo} position={"absolute"} />
                    <Link to="/home" style={{textDecoration:"none"}}>
                    <H1 color={"#FFFFFF"} padding={"0.2em"}>
                        Pokemon App
                    </H1>
                    </Link>
                    <Search />
                    <Links />
                    <Avatar/>
                </Div>
            </Nav1>

    )
}