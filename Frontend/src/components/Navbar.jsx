import React from "react";
import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

const Navbar = () => {
  const Nav = styled.nav`
  position: relative;
    right: 7rem;

  .navbar-list{
    display:flex;
    gap:1.8rem;
     
    li,a{
      list-style:none;
      text-decoration:none;
   
    }
  }
  .navbar-link{
    &:link,
    &:visited{
      display:inline-block;
      text-decoration:none;
      font-size:1.5rem;
       
      color:${({theme})=>theme.colors.black};
      transition:color 0.3s linear;
    }
    &:hover,
    &:active{
      color:${({theme})=>theme.colors.helper};
    }
  }

  /* Your existing CSS styles */

/* Dropdown styles */
.dropdown {
    position: relative;
    display: inline-block;
   
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
    display: block;
}
.navbar-item{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  text-align: left;
}

 
  
  
  `;
  return (
    <Nav>
      <div className="manuIcon">
        <ul className="navbar-list">
        <li  >
               
            <NavLink className="navbar-link" to="/cases">Cases </NavLink>
                
            </li>          
            <li  >
            <NavLink className="navbar-link" to="/straps">Straps</NavLink>            
                 
            </li>
          <li>
            <NavLink className="navbar-link" to="/powerbank">Power Banks</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/cables">Cables</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/magsafe">MagSafe</NavLink>
          </li>
          <li>
            <NavLink className="navbar-link" to="/chargers">Charger</NavLink>
          </li>
            <li class="dropdown">
            <NavLink className="navbar-link" to="/more">More&#9662;</NavLink>
                <div class="dropdown-content">    
                 
                <NavLink className="navbar-item" to="/cases">About Us</NavLink>
                <NavLink className="navbar-item" to="/cases">Contact Us </NavLink>
                
                </div>
            </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;