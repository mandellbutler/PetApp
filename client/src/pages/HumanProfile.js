import React from "react";
import 'materialize-css';
import {Row, Col } from 'react-materialize';

// import { deletepet } from '../utils/API';
import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { SAVED_PETS } from "../utils/queries";

const SavedPets = () => {
  // const [userData, setUserData] = useState({});
  const { data } = useQuery(SAVED_PETS);
  const userData = data?.me || {};



  return (
    <>
    

<Row>
{userData.savedPets.map((pet) => {
            return (
<Col s={12} m={6}>
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{pet.name}</span>
      <p>{pet.description}</p>
    </div>
    <div class="card-action">
      <a href="#">This is a link</a>
      <a href="#">This is a link</a>
    </div>
  </div>
</Col>
    );
            })};
</Row>

</>
  );
};

export default SavedPets;