import React from "react";
import 'materialize-css';
import {Row, Col } from 'react-materialize';
import homedog from "../assets/homedog.png";


const Home = () =>{
  return (

     
<Row>
    <Col s={6} m={3}>
        <img src={homedog} alt="dog" />
      </Col>
  </Row>

  
      
  );
}

export default Home;