// import React from "react";
// import 'materialize-css';
// import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';


// // import Auth from "../utils/auth";
// import { useQuery, } from "@apollo/react-hooks";
// import { QUERY_petS } from "../utils/queries";

// const SavedPets = () => {
  
//   const { data } = useQuery(QUERY_petS);
// //   const userData = data?.me || {};


//     // const [state, dispatch] = useGlobelContext();




//   return (
//     <>
//  {/* userdata.savedpets  */}
// <Row>
// {/* {state.human.pets.map((pet) => { */}
//     {data.human.pets.map((pet) => {

//             return (
// <Col s={12} m={7}>
//       <Card>
//         <div className="card-image"> 
//          <img src={pet.image} alt="pet-profile-pic" /> 
//           <span className="card-title">{pet.name}</span>
//         </div>
//         <div className="card-content">
//             <h3>My name is {pet.name}, welcome to me profile!</h3>
//             <p>Breed:{pet.breed}</p>
//           <p>Location:{pet.location}</p>
//         </div>
//         <div className="card-action"> 
//            <a href="#">This is a link</a> 
//          </div>
//       </Card>
//     </Col> 
//     );
//             })}; 
//  </Row> 
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

//       header={<CardTitle image="https://materializecss.com/images/sample-1.jpg">Card Title</CardTitle>}

//       revealIcon={<Icon>more_vert</Icon>}
//     >
//       Here is the standard card with an image thumbnail.
//     </Card>
//   </Col>
// </Row>
// </>
//   );
// };

// export default SavedPets;

import React, { useState } from 'react';

// Import useGlobalContext hook
import { useGlobalContext } from '../context/GlobalContext';
import {Col, Card, Icon, CardTitle} from 'react-materialize';


export default function PetList() {
  // Assign student related variables from our custom hook
  const { pets, addPet, removePet, breeds } = useGlobalContext();

  const [newPetName, setnewPetName] = useState('');
  const [newPetBreed, setnewPetBreed] = useState('');

  return (
    <div>
      {pets ? (
        <>
          <section className="pet-list">
            

             
                {pets.map((pet) => (

                  
<Col s={12} m={7}>
       <Card>
         <div className="card-image"> 
          <img src={pet.image} alt="pet-profile-pic" /> 
           <span className="card-title">{pet.name}</span>
         </div>
        <div className="card-content">
             <h3>My name is {pet.name}, welcome to me profile!</h3>
             <p>Breed:{pet.breed}</p>
           <p>Location:{pet.location}</p>
         </div>
         <div className="card-action"> 
            <a href="#">This is a link</a> 
          </div>
       </Card>
     </Col> 
                ))}
          
           

            <div className="add-student">
              <input
                onChange={(e) => setnewPetName(e.target.value)}
                placeholder="New student name..."
                type="text"
                value={newPetName}
              />

              <select
                onChange={(e) => setnewPetBreed(e.target.value)}
                value={newPetBreed}
              >
                <option>Choose breed...</option>
                {breeds.map((breed) => (
                  <option key={breed} value={breed}>
                    {breed}
                  </option>
                ))}
              </select>

              <button
                type="button"
                onClick={() => {
                  addPet({ name: newPetName, breed: newPetBreed });
                  setnewPetBreed('');
                  setnewPetName('');
                }}
              >
                Add Pet
              </button>
            </div>
          </section>
        </>
      ) : (
       <span></span>
      )}
    </div>
  );
}
