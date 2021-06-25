import React from "react";
import 'materialize-css';
import {Row, Col, Card, Icon, CardTitle, Button} from 'react-materialize';
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
        <Button
  href="/search"
  node="a"
  waves="light deep-orange darken-2"
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
  </Col>
</Row>
      
  );
}

export default Home;

{/* <Row>
    <Col s={6} m={3}>
        <img src={homedog} alt="dog" />
      </Col>
  </Row> */}