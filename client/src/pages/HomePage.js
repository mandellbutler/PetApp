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
  >
    <Card
      actions={[
        <Button
  href="/search"
  node="a"
  waves="light"
  className="deep-orange darken-2 valign-center"
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
    s={12}
    className="center-align"
  >
    <Card
      actions={[
        <a key="1" href="#">This is a link</a>,
        <a key="2" href="#">This is a link</a>
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

{/* <Row>
    <Col s={6} m={3}>
        <img src={homedog} alt="dog" />
      </Col>
  </Row> */}