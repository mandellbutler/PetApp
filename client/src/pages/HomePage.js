import React from "react";
import 'materialize-css';
import {Row, Col, Card, Icon, CardTitle } from 'react-materialize';
import homedog from "../assets/homedog.png";


const Home = () =>{
  return (

  <Row>
  <Col
    m={6}
    s={12}
  >
    <Card
      actions={[
        <a key="1" href="#">This is a Link</a>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image src={homedog}></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      Here is the standard card with an image thumbnail.
    </Card>
  </Col>
</Row>
      
  );
}

export default Home;
