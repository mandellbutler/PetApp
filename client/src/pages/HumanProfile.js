import React from "react";
import 'materialize-css';
import {Row, Col, Card } from 'react-materialize';


// import Auth from "../utils/auth";
import { useQuery, } from "@apollo/react-hooks";
import { QUERY_HUMANS } from "../utils/queries";
import { QUERY_DOGS } from "../utils/queries";

const SavedHuman = () => {
  
// human information
  const { data } = useQuery(QUERY_HUMANS);
  const { dogData } = useQuery(QUERY_DOGS);
  // const humanData = data?.me || {};
  console.log(data)

  return (
    <>
    
{/* humandata.savedpets */}
    <Row>
{data.savedHuman.map((human) => {
            return (
<Col s={12} m={7}>
      <Card>
        <div className="card-image">
        {/* <img src={human.image} alt="pet-profile-pic" /> */}
          <span className="card-title">{human.name}</span>
        </div>
        <div className="card-content">
          <p>{human.location}</p>
        </div>
        <div className="card-action">
          {/* <a href="#">This is a link</a> */}
        </div>
      </Card>
    </Col>
    );
            })};
</Row>

<Row>
{dogData.savedPets.map((dog) => {
            return (
<Col s={12} m={7}>
      <Card>
        <div className="card-image">
        {/* <img src={dog.image} alt="pet-profile-pic" /> */}
          <span className="card-title">{dog.name}</span>
        </div>
        <div className="card-content">
          <p>{dog.location}</p>
        </div>
        <div className="card-action">
          <a href="pet-profile">Visit my Profile!</a>
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



