import React from "react";
import 'materialize-css';
import {Row, Col, Card, Icon, CardTitle, Button} from 'react-materialize';
import homedog from "../assets/homedog.png";

const Home = () =>{
  return (



  <Row>
  <Col
    m={12}
    s={6}
    className="center-align"
  >
    <Card
      actions={[
        <Button
  href="/search"
  node="a"
  waves="light"
  className="deep-orange accent-2 valign-center"
>
  Search for Pets Here!
</Button>
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={homedog}></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
      
    >
    Find local pets to adopt with Fetch!
    </Card>
  </Col>,

  <Row>
  <Col
    m={6}
    offset-s={12}
    className="center-align"
  >
    <Card
      actions={[
        <Button
        href="/adoption-page"
        node="a"
        waves="light"
        className="deep-orange accent-2 valign-center"
      >
        Adopt a Pet Today!
      </Button>
      ]}
      
      closeIcon={<Icon>close</Icon>}

      revealIcon={<Icon>more_vert</Icon>}
      textClassName="dark-text"
    >
      <h3>About Us</h3>
      <h5>Fetch is an online application which allows local pet lovers to get connected with furry friends looking for homes. Whether you are looking to adopt or rehouse a pet, we at Fetch will be happy to help! </h5>
    </Card>
  </Col>
</Row>
</Row>
      
  );
}

export default Home;
