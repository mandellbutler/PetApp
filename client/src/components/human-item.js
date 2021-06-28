import React from 'react';
import {Row, Col, Card, Icon, CardTitle} from 'react-materialize';

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const ProfilePetItem = ({ pet }) => {
  return (
    
    <Row>
  <Col
    m={6}
    s={12}
    className="valign center-align"
  >
    <Card
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={}>{pet.Humanname}</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      {pet.loction}
      {pet.humanBio}
    </Card>
  </Col>
</Row>
  )
};

export default ProfilePetItem;