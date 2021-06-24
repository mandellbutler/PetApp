import React from "react";
import { Link } from 'react-router-dom';
import {Nav, Ul, Li} from 'react-materiaLize';
import 'materiaLize-css';
import SignUpForm from './SignupForm';
import LoginForm from './LoginForm';

// import Auth from '../utils/auth';

function NavBar() {
  return (
    // <div>
      
    //     Nav
    //   <a href='/'>Home</a>
    //   <a href='/adoption-page'>Adoption</a>
    //   <a href='/human-profile'>Human</a>
    //   <a href='/pet-profile'>Pet</a>
    //   <a href='/search'>Search</a>
    //   <a href='/login'>Login</a>

    // </div>
    
    <Nav>
    <div className="nav-wrapper">
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <Ul id="nav-mobile" class="right hide-on-med-and-down">
        <Li><a href="/adoption-page">Adoption Page</a></Li>
        <Li><a href="/human-profile">My Profile</a></Li>
        <Li><a href="/pet-profile">Pet Profile</a></Li>
        <Li><a href="/search">Search</a></Li>
      </Ul>
    </div>
  </Nav>
  );
}

export default NavBar;