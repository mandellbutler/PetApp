import React from "react";
import 'materialize-css';
import {Row, Col } from 'react-materialize';


import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { human } from "../schemas/resolvers";

const SavedHuman = () => {
  
// user information
  const { data } = useQuery(human);
  const userData = data?.me || {};



  return (
    <>
    

<Row>
{userData.savedHuman.map((human) => {
            return (
<Col s={12} m={6}>
  <div className="card blue-grey darken-1">
    <div className="card-content white-text">
      <span className="card-title">{human.name}</span>
      <p>{human.description}</p>
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

export default SavedHuman;