import React from "react";
import 'materialize-css';
import {Row, Col, Card} from 'react-materialize';


// import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { QUERY_DOGS } from "../utils/queries";

const SavedPets = () => {
  
  const { data } = useQuery(QUERY_DOGS);
//   const userData = data?.me || {};



  return (
    <>
{/* userdata.savedpets */}
<Row>
{data.savedPets.map((dog) => {
            return (
<Col s={12} m={7}>
      <Card>
        <div className="card-image">
        {/* <img src={dog.image} alt="pet-profile-pic" /> */}
          <span className="card-title">{dog.name}</span>
        </div>
        <div className="card-content">
            <h3>My name is {dog.name}, welcome to me profile!</h3>
            <p>Breed:{dog.breed}</p>
          <p>Location:{dog.location}</p>
        </div>
        <div className="card-action">
          {/* <a href="#">This is a link</a> */}
        </div>
      </Card>
    </Col>
    );
            })};
</Row>

</>
  );
};

export default SavedPets;