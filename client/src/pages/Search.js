import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
import PetList from '../components/PetList';
// require('dotenv').config();



function Search() {
  const [state, dispatch] = useGlobalContext();

  // url and token for fetch request
  const url = "https://api.petfinder.com/v2/animals?location=ny";  // Starting pets
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

  // Fetch api info from petfinder
  const getPets = async () => {
    let token = process.env.REACT_APP_APITOKEN;
    // console.log("Access Tolkein: " + token);
    let apiData = await getApi(url, token);

    // if token doesn't work, get new one
    if (apiData.status !== 200) {
        token = await getToken();
        apiData = await getApi(url, token)
    }

    console.log("PETS API ", apiData)
    setPets([...pets, ...apiData.animals]);
  }

  const getApi = async (url, token) => {
    const data = await fetch(url, {
      // add token
      headers: {
          'Authorization': 'Bearer '+token, 
      }
    })
    const response = await data.json();
    // console.log(response);
    return response;
  }

  const getToken = async () => {
    const cred = JSON.stringify({
      grant_type: "client_credentials",
      client_id: process.env.REACT_APP_APIKEY,
      client_secret: process.env.REACT_APP_APISECRET
    })
    // Get token from petfinder api
    const data = await fetch("https://api.petfinder.com/v2/oauth2/token", {
        headers: {
            'Content-Type': 'application/json'
        },
        body: cred,
        method: "POST"
    })
    const response = await data.json();
    console.log(response);
    return response
  }

  return (
    <div>
       <form action="/action_page.php"/>
       <h2>Fetch Friends By:</h2>
        <label for="location">Location:</label><br></br>
        <input type="text" id="location" name="location"/><br></br>
        <label for="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed"/><br></br>
        <button onClick={()=>getPets()}>Fetch Friends!</button>

      <PetList pets={pets}></PetList>

    </div>
  )
}

export default Search