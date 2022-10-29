import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Nav =styled.div`
display:flex;
text-align: center;
gap:50px;
background:sky;
color:white;
margin-top:50px;
margin-bottom:30px;
margin-left : 600px;
text-decoration:none`;

export const Navigator=()=>{
    return(
        <Nav>
            <Link to={"/"}>Home</Link>
            <Link to={"/login"}>Login</Link>
            <Link to={"/todo"}>Todo</Link>
        </Nav>
    )
}