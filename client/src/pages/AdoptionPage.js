import React from "react";
import { useGlobalContext } from '../context/GlobalContext';

function AdoptionPage() {
  const [state, dispatch] = useGlobalContext();
  return (
    <div>
      <form action="/action_page.php"/>
      <h2>Adoption Request Form</h2>
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname"/><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname"/><br></br>
        <label for="address">Address:</label><br></br>
        <input type="text" id="address" name="address"/><br></br>
        <label for="email">Email:</label><br></br>
        <input type="text" id="email" name="email"/><br></br>
        <a href='/'>Submit</a>
    </div>
      
  );
}

export default AdoptionPage;