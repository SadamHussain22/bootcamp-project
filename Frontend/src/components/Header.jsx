 import React from 'react'
 import { NavLink } from "react-router-dom";
 import Navbar from "../components/Navbar"
import { styled } from "styled-components";
import image from "./navecompenets/images/wood-logo-dark.svg";
import SidefunctionNave from './SidefunctionNave';
import  './style.css';
 const Header = () => {
   return (
    <MainHeader>
     <header>
     <NavLink to='/'><img src={image} alt="logo"  className='logo'/> </NavLink>
     </header>
       <Navbar/>
     <SidefunctionNave/>
     </MainHeader>
   )
 }
 const MainHeader = styled.header`
 padding:0 4.8rem;
 height:7rem;
 background-color:${({ theme }) => theme.colors.bg};
 display:flex;
 
 align-items:center;
 .logo{
    height:auto;
    max-width:45%;
 }
   
  
  
  `;
 export default Header
 