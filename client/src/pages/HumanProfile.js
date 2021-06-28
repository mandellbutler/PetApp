

import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
import HumanList from '../components/human-list';
// import PetProfile from './PetProfile';
import {Button} from 'react-materialize';


function HumanProfile() {
  // const [state, dispatch] = useGlobalContext();
  // Starting pets
  const initialHuman = [

    {
      humanName: 'Luis',
      bio: 'I am a 32 year old in the NYC area moving to Madrid but I am not able to take my puppies with me ',
      location: 'NYC'

    },
    

  ]
  // pets state with starting data
  const [pets, setPets] = useState(initialHuman);

  return (
    <div>
       

      <HumanList pets={pets}></HumanList>
      {/* <PetProfile pets={pets}></PetProfile> */}

    </div>
  )
}

export default HumanProfile