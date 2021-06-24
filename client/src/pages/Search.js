import React from "react";
import { useGlobalContext } from '../context/GlobalContext';

function SearchPage() {
  const [state, dispatch] = useGlobalContext();
  return (
    <div>
       <form action="/action_page.php"/>
       <h2>Fetch Friends By:</h2>
        <label for="location">Location:</label><br></br>
        <input type="text" id="location" name="location"/><br></br>
        <label for="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed"/><br></br>
        <button>Fetch Friends!</button>
    </div>
  )
}

export default SearchPage