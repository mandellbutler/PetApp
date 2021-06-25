import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
import PetList from '../components/PetList';


function Search() {
  // const [state, dispatch] = useGlobalContext();
  // Starting pets
  const initialPets = [
    {
      name: 'steve',
      description: 'definitely not a dog',
      primary_photo_cropped: {
        full: "/images/steve.jpg"
      }
    },
    {
      name: 'jack',
      description: 'definitely not a cat',
    },
    {
      name: 'hawa',
      description: 'design expert',
      primary_photo_cropped: {
        full: "/images/hawa.jpg"
      }
    },
    {
      name: 'mandell',
      description: 'hackerman',
      primary_photo_cropped: {
        full: "/images/mandell.jpg"
      }
    },
    {
      name: 'luis',
      description: 'please come back',
      primary_photo_cropped: {
        full: "/images/luis.jpg"
      }
    },

  ]
  // pets state with starting data
  const [pets, setPets] = useState(initialPets);

  return (
    <div>
       <form action="/action_page.php"/>
       <h2>Fetch Friends By:</h2>
        <label for="location">Location:</label><br></br>
        <input type="text" id="location" name="location"/><br></br>
        <label for="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed"/><br></br>
        <button>Fetch Friends!</button>

      <PetList pets={pets}></PetList>

    </div>
  )
}

export default Search