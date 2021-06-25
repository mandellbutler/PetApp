import React from 'react';
import {Card, Icon, CardTitle} from 'react-materialize';

// Issue item accepts a single issue as a prop
// This component is responsible for displaying the specific information for a given issue
const PetItem = ({ pet }) => {
  return (
    
    <Card
        closeIcon={<Icon>close</Icon>}
        header={<CardTitle image={pet.primary_photo_cropped ? pet.primary_photo_cropped.full : "/images/dog.jpg"} reveal waves="light"/>}
        reveal={<p>{pet.description}</p>}
        revealIcon={<Icon>more_vert</Icon>}
        title={pet.name}
        className="small"
        >
        <p>
        <a href="#">
            This is a link
        </a>
        </p>
    </Card>
  )
};

export default PetItem;