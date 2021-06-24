import React from "react";
import 'materialize-css';
import {Row, Col, Card } from 'react-materialize';


// import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { human } from "../schemas/resolvers";

const SavedHuman = () => {
  
// user information
  const { data } = useQuery(human);
  const userData = data?.me || {};



  return (
    <>
    

    <Row>
{userData.savedHuman.map((user) => {
            return (
<Col s={12} m={7}>
      <Card>
        <div className="card-image">
        <img src={user.image} alt="pet-profile-pic" />
          <span className="card-title">{user.name}</span>
        </div>
        <div className="card-content">
          <p>{user.description}</p>
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

export default SavedHuman;