import React from "react";
import 'materialize-css';
import {Card, Row, Col } from 'react-materialize';
import homedog from "../public/homedog.png";


const Home = () =>{
  return (

     
          <Row>
    <Col s={12} m={7}>
      <Card>
        <img src={homedog} alt="dog" />
        </Card>
      </Col>
  </Row>
  

       
     

      
  );
}

export default Home;