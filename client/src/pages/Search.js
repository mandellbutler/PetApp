import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
import PetList from '../components/PetList';


function Search() {
  // const [state, dispatch] = useGlobalContext();

  // url and token for fetch request
  const url = "https://api.petfinder.com/v2/animals?location=ny";
  const access_token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2cEZiSWx0bGRCOUZ4c2plaHRlSmwwbThOc3JSaGJDRkxJTHM4ZUd0WVBtWWdzOEhodyIsImp0aSI6IjAwNzhmODUwMzZhNzkwY2NlNzFhNTY5ZjViZmRhNmM0MTBkMzc0MmZhZjJmODFiMmNhZTYxYzUzZjFhNTU5YzhiYjEyNmIzZjZmOGVmNzc5IiwiaWF0IjoxNjI0NjM2ODQ3LCJuYmYiOjE2MjQ2MzY4NDcsImV4cCI6MTYyNDY0MDQ0Nywic3ViIjoiIiwic2NvcGVzIjpbXX0.vnnwYn9fofrueUjrmFyR_g6tpp5425qLFGU9naDU-9tUZ-09W5nszn3G5eiHEG4mAhVQFFbULjytGiJsuCg7Cs3ntzN6-5IKUxSRMczAwQjYZPHAX3mu5prugIXljrM-lXydc0scPRiRTCLJNHIi9itkMz0hAUEAQOw18hhYAPuNECJICFLcehKhRGYce3C8TkTT5Y9-aUcCwZIrSMFRcIBKcqOS8gn4mXTmh9ECCC35YDJjflzhGdPDpYD3JHgUapuDuozuTL99vXqsIi79I3nHg0fQedZUm7EFdLrthSqe7IH3xotcaSTQ7PqAkJEU1PlugR2Ki45k7K2QClj-qQ";
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

  // Fetch api info from petfinder
  const getPets = async (url, token) => {
    console.log("Run getPets()");
    const response = await fetch(url, {
        // add token
        headers: {
            'Authorization': 'Bearer '+token, 
        }
    })
    console.log("Response: ", response);
    const data = await response.json();
    console.log("PETS API ", data)
    setPets([...pets, ...data.animals]);
  }

  return (
    <div>
       <form action="/action_page.php"/>
       <h2>Fetch Friends By:</h2>
        <label for="location">Location:</label><br></br>
        <input type="text" id="location" name="location"/><br></br>
        <label for="breed">Breed:</label><br></br>
        <input type="text" id="breed" name="breed"/><br></br>
        <button onClick={()=>getPets(url, access_token)}>Fetch Friends!</button>

      <PetList pets={pets}></PetList>

    </div>
  )
}

export default Search