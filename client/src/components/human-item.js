import React from 'react';
import {Row, Col, Card, Icon, CardTitle, Button} from 'react-materialize';
import luis from '../assets/luis.png'

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const ProfilePetItem = ({ pet }) => {
  return (
   <div class= "human-profile">
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
        <h4>
            {pet.humanName}
        </h4>
        <h6>
        {pet.location}
        </h6>
        <div>{pet.bio}
        </div>
        
    
    </Card>


  </Col>,
  <Row>
  <Col
    m={12}
    s={12}
    className="center-align"
  >
    <Card
      actions={[
        <Button
        href="/pet-profile"
        node="a"
        waves="light"
        className="deep-orange accent-2 valign-center"
      >
        View My Profile!
      </Button>
      ]}
      className="white"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="dark-text"
      title="steve"
    >
       BullDog
    </Card>
  </Col>,
  <Col
    m={12}
    s={12}
    className="center-align"
  >
    <Card
      actions={[
        <Button
        href="/pet-profile"
        node="a"
        waves="light"
        className="deep-orange accent-2 valign-center"
      >
        View My Profile!
      </Button>
      ]}
      className="white"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="dark-text"
      title="Jack"
    >
       siamese cat
    </Card>
  </Col>,
  <Col
    m={12}
    s={12}
    className="center-align"
  >
    <Card
      actions={[
        <Button
        href="/pet-profile"
        node="a"
        waves="light"
        className="deep-orange accent-2 valign-center"
      >
        View My Profile!
      </Button>
      ]}
      className="white"
      closeIcon={<Icon>close</Icon>}
      revealIcon={<Icon>more_vert</Icon>}
      textClassName="dark-text"
      title="Hawa"
    >
      yellow lab
    </Card>
  </Col>
</Row>
</Row>
</div>
  )
};

export default ProfilePetItem;