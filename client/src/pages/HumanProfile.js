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
import PetList from '../components/profile-pet-list';
import {Button} from 'react-materialize';


function HumanProfile() {
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
    


  ]
  // pets state with starting data
  const [pets, setPets] = useState(initialPets);

  return (
    <div>
       

      <PetList pets={pets}></PetList>

    </div>
  )
}

export default HumanProfile