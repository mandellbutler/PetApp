import React from "react";
import 'materialize-css';
import {Row, Col, Card} from 'react-materialize';


// import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { dogs } from "../server/schemas/resolvers";

const SavedPets = () => {
  
  const { data } = useQuery(dogs);
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
        <img src={dog.image} alt="pet-profile-pic" />
          <span className="card-title">{dog.name}</span>
        </div>
        <div className="card-content">
          <p>{dog.description}</p>
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