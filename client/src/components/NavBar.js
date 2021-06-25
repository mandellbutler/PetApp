import React from "react";
import 'materialize-css';
import {Navbar,NavItem, Icon } from 'react-materialize';



const NavBar = () => {
  return (
   
    
    <Navbar
    alignLinks="left"
    // brand={<a className="brand-logo right" href="#">Logo</a>}
    id="mobile-nav"
    className="deep-orange darken-2"
    menuIcon={<Icon>menu</Icon>}
    options={{
      draggable: true,
      edge: 'left',
      inDuration: 250,
      onCloseEnd: null,
      onCloseStart: null,
      onOpenEnd: null,
      onOpenStart: null,
      outDuration: 200,
      preventScrolling: true
    }}
  >
    <NavItem onClick={function noRefCheck(){}}>
    </NavItem>
    <NavItem href="/">
      Home
    </NavItem>
    <NavItem href="/pet-profile">
      Pet Profile
    </NavItem>
    <NavItem href="/human-profile">
    My Profile
    </NavItem>
    <NavItem href="/search">
      Search Pets
    </NavItem>
    <NavItem href="/Login">
      Login/SignUp
    </NavItem>
  </Navbar>
  );
}

export default NavBar;