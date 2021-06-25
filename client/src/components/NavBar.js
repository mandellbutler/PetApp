import React from "react";
import 'materialize-css';
import {Nav, Li, Ul } from 'react-materialize';



const NavBar = () => {
  return (
   
    
  <nav>
    <div className="nav-wrapper">
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <Ul id="nav-mobile" class="right hide-on-med-and-down">
        <Li><a href="/adoption-page">Adoption Page</a></Li>
        <Li><a href="/human-profile">My Profile</a></Li>
        <Li><a href="/pet-profile">Pet Profile</a></Li>
        <Li><a href="/search">Search</a></Li>
      </Ul>
    </div>
  </nav>
  );
}

export default NavBar;