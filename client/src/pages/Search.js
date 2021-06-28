import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
import PetList from '../components/PetList';
// require('dotenv').config();
import { TextInput, Button } from 'react-materialize';
import { formStyle, galleryStyle } from '../utils/style'



function Search() {
  const [state, dispatch] = useGlobalContext();

  // url and token for fetch request
  // const url = "https://api.petfinder.com/v2/animals?location=ny";  // Starting pets
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
  const [params, setParams] = useState({
    location: '',
    species: 'dog',
    breed: '',
  })

  const handleInput = (event) => {
    switch (event.target.name) {
      case "location":
        // Do this
        setParams(prevState => ({ ...prevState, location: event.target.value }))
        break;
      case "breed":
        setParams(prevState => ({ ...prevState, breed: event.target.value }))
        break;
      default:
        return;
    }
  }

  // Fetch api info from petfinder
  const getPets = async () => {
    const serverData = await fetch('/api/pets', {
      method: 'POST',
      headers: {
        "accepts": "application/json"
      },
      body: JSON.stringify(params)
    })
    const serverPets = await serverData.json();
    console.log("Server Pets: ", serverPets);
    // console.log("Apollo Data: ", serverPets);

    // let token = process.env.REACT_APP_APITOKEN;
    // // console.log("Access Tolkein: " + token);
    // let apiData = await getApi(url, token);

    // // if token doesn't work, get new one
    // if (apiData.status !== 200) {
    //     token = await getToken();
    //     apiData = await getApi(url, token)
    // }

    console.log("PETS API ", serverPets)
    setPets([...pets, ...serverPets.animals]);
  }

  // const getApi = async (url, token) => {
  //   const data = await fetch(url, {
  //     // add token
  //     headers: {
  //         'Authorization': 'Bearer '+token, 
  //     }
  //   })
  //   const response = await data.json();
  //   // console.log(response);
  //   return response;
  // }

  // const getToken = async () => {
  //   const cred = JSON.stringify({
  //     grant_type: "client_credentials",
  //     client_id: process.env.REACT_APP_APIKEY,
  //     client_secret: process.env.REACT_APP_APISECRET
  //   })
  //   // Get token from petfinder api
  //   const data = await fetch("https://api.petfinder.com/v2/oauth2/token", {
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //       body: cred,
  //       method: "POST"
  //   })
  //   const response = await data.json();
  //   console.log(response);
  //   return response
  // }

  return (
    <div>
      <div style={formStyle}>
        {/* <form onSubmit={handleSubmit}/> */}
        <div class="container" id="searchForm">
          <h2>Fetch Friends By:</h2>
          <label for="location">Location:</label><br></br>
          <input type="text" id="location" name="location" value={params.location} onChange={handleInput} /><br></br>
          <label for="breed">Breed:</label><br></br>
          <input type="text" id="breed" name="breed" value={params.breed} onChange={handleInput} /><br></br>
          <Button type="submit" className="deep-orange accent-2 valign-center" onClick={() => getPets()}>Fetch Friends!</Button>
        </div>
      </div>
      <div style={galleryStyle}>
        <PetList pets={pets}></PetList>
      </div>

    </div>
  )
}

export default Search