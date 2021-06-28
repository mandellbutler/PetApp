

// import React, { useState } from 'react';

// // Import useGlobalContext hook
// import { useGlobalContext } from '../context/GlobalContext';
// import {Col, Card, Icon, CardTitle} from 'react-materialize';


// export default function PetList() {
//   // Assign student related variables from our custom hook
//   const { pets, addPet, removePet, breeds } = useGlobalContext();

//   const [newPetName, setnewPetName] = useState('');
//   const [newPetBreed, setnewPetBreed] = useState('');

//   return (
//     <div>
//       {pets ? (
//         <>
//           <section className="pet-list">
            

             
//                 {pets.map((pet) => (

                  
// <Col s={12} m={7}>
//        <Card>
//          <div className="card-image"> 
//           <img src={pet.image} alt="pet-profile-pic" /> 
//            <span className="card-title">{pet.name}</span>
//          </div>
//         <div className="card-content">
//              <h3>My name is {pet.name}, welcome to me profile!</h3>
//              <p>Breed:{pet.breed}</p>
//            <p>Location:{pet.location}</p>
//          </div>
//          <div className="card-action"> 
//             <a href="#">This is a link</a> 
//           </div>
//        </Card>
//      </Col> 
//                 ))}
          
           

//             <div className="add-student">
//               <input
//                 onChange={(e) => setnewPetName(e.target.value)}
//                 placeholder="New student name..."
//                 type="text"
//                 value={newPetName}
//               />

//               <select
//                 onChange={(e) => setnewPetBreed(e.target.value)}
//                 value={newPetBreed}
//               >
//                 <option>Choose breed...</option>
//                 {breeds.map((breed) => (
//                   <option key={breed} value={breed}>
//                     {breed}
//                   </option>
//                 ))}
//               </select>

//               <button
//                 type="button"
//                 onClick={() => {
//                   addPet({ name: newPetName, breed: newPetBreed });
//                   setnewPetBreed('');
//                   setnewPetName('');
//                 }}
//               >
//                 Add Pet
//               </button>
//             </div>
//           </section>
//         </>
//       ) : (
//        <span></span>
//       )}
//     </div>
//   );
// }
// import React from "react";
// import 'materialize-css';
// import {Row, Col, Card, Icon, CardTitle } from 'react-materialize';



// // import Auth from "../utils/auth";
// import { useQuery, } from "@apollo/react-hooks";
// import { QUERY_HUMANS } from "../utils/queries";
// import { QUERY_DOGS } from "../utils/queries";
// import {ADD_DOGS} from "../utils/mutations"

// const SavedHuman = () => {

//   // human information
//   const { data } = useQuery(QUERY_HUMANS);
//   console.log("Query Data: ", data)
//   const { dogData } = useQuery(QUERY_DOGS);
//   const {addDogs} = useQuery(ADD_DOGS);
//   // const userData = data?.me || {};



//   return (
//     <>
    

//     <Row>
// {data.SavedHuman.map((human) => {
//             return (
// <Row>
//   <Col
//     m={6}
//     s={12}
//   >
//     <Card
//       actions={[
//         <a key="1" href="#">This is a Link</a>
//       ]}
//       closeIcon={<Icon>close</Icon>}
//       header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">{human.name}</CardTitle>}
//       revealIcon={<Icon>more_vert</Icon>}
//     >
//       Here is the standard card with an image thumbnail.
//     </Card>
//   </Col>
// </Row>
//     );
//             })};
// </Row>

//       <Row>
//         {dogData.savedPets.map((dog) => {
//           return (
//             <Col s={12} m={7}>
//               <Card>
//                 <div className="card-image">
//                   {/* <img src={dog.image} alt="pet-profile-pic" /> */}
//                   <span className="card-title">{dog.name}</span>
//                 </div>
//                 <div className="card-content">
//                   <p>{dog.location}</p>
//                 </div>
//                 <div className="card-action">
//                   <a href="pet-profile">Visit my Profile!</a>
//                 </div>
//               </Card>
//             </Col>
//           );
//         })};
// </Row>

//     </>
//   );
// };

// export default SavedHuman;

import React, { useState } from "react";
import { useGlobalContext } from '../context/GlobalContext';
// import PetList from '../components/profile-pet-list';
import PetList from '../components/petprofile-pet-list';
import {Button} from 'react-materialize';


function PetProfile() {
  // const [state, dispatch] = useGlobalContext();
  // Starting pets
  const initialPets = [
    {
      name: 'steve',
      breed: 'BullDog',
      age: 9,
      description: 'I am a 9 year old french bulldog looking for a new loving home',
      primary_photo_cropped: {
        full: "/images/steve.jpg"
      }
    },
      {
        name: 'jack',
        breed: 'siamese cat',
        age: 12,
        description: 'definitely not a cat',
      },
      {
        name: 'hawa',
        breed:'yellow lab',
        age:2,
        description: 'please adopt me',
        primary_photo_cropped: {
          full: "/images/hawa.jpg"
        }
      },
      {
        humanName: 'Luis',
        bio: 'I am a 32 year old in the NYC area moving to Madrid but I am not able to take my puppies with me ',
        location: 'NYC'
  
      },


  ]
  // pets state with starting data
  const [pets, setPets] = useState(initialPets);

  return (
    <div>
       

      <PetList pets={pets}></PetList>

    </div>
  )
}

export default PetProfile