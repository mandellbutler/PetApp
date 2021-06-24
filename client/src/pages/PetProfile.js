import React from "react";
import 'materialize-css';
import {Row, Col } from 'react-materialize';


import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { dogs } from "../schemas/resolvers";

const SavedPets = () => {
  
  const { data } = useQuery(dogs);
  const userData = data?.me || {};



  return (
    <>
    

<Row>
{userData.savedPets.map((dog) => {
            return (
<Col s={12} m={6}>
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{dog.name}</span>
      <p>{dog.description}</p>
    </div>
    <div className="card-action">
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