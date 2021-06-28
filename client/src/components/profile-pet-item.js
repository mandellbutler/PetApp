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
      actions={[
        <a key="1" href="/adoption-page">Adopt Me!</a>,
       
      ]}
      closeIcon={<Icon>close</Icon>}
      header={<CardTitle image={pet.primary_photo_cropped ? pet.primary_photo_cropped.full : "/images/dog.jpg"}>{pet.name}</CardTitle>}
      revealIcon={<Icon>more_vert</Icon>}
    >
      {pet.breed}
    </Card>
  </Col>
</Row>
  )
};

export default ProfilePetItem;