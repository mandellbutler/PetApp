import React from "react";

function AdoptionPage() {
  return (
    <div>
      <form action="/action_page.php"/>
        <label for="fname">First name:</label><br></br>
        <input type="text" id="fname" name="fname" value="John"/><br></br>
        <label for="lname">Last name:</label><br></br>
        <input type="text" id="lname" name="lname" value="Doe"/><br></br>
        <input type="submit" value="Submit"/>
    </div>
      
  );
}

export default AdoptionPage;