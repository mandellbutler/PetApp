import React from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';
import luis from '../assets/luis.png'

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const ProfilePetItem = ({ pet }) => {
  return (
    
    <Row>
  <Col
    m={12}
    s={12}
    className="valign center-align"
  >
    <Card
     
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={luis}></CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
        <div>
        {pet.location}
        </div>
        <div>{pet.bio}</div>
    
    </Card>
  </Col>
</Row>
  )
};

export default ProfilePetItem;