import React from "react";

function NavBar() {
  return (
    <div>
      {/* <Route exact path='/adoption-page' component={AdoptionPage} />
            <Route exact path='/human-profile' component={HumanProfile} />
            <Route exact path='/pet-profile' component={PetProfile} />
            <Route exact path='/search' component={Search} /> */}
        Nav
      <a href='/'>Home</a>
      <a href='/adoption-page'>Adoption</a>
      <a href='/human-profile'>Human</a>
      <a href='/pet-profile'>Pet</a>
      <a href='/search'>Search</a>
      <a href='/login'>Login</a>
      <a href='/signup'>Sign Up</a>

    </div>
  );
}

export default NavBar;