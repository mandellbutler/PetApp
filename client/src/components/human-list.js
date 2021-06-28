import React from 'react';
// import IssueItem from '../components/IssueItem';
import IssueItem from './human-item'
import { Row, Col } from 'react-materialize';

// Here we accept an array of petss as a prop
const HumanList = ({ pets }) => {
  console.log('Pets: ', pets);

  // We create a list of rendered petsItems by using the map method on `petss`
  const renderedList = pets.map((pet, index) => {
    // return <div className='m-3' key={index}>
    //     <p>Name: {pet.name},  Description: {pet.description}</p>
    // </div>;
    return (
      <Col m={4} s={12} key={index}>
      <IssueItem pet={pet}></IssueItem>
      </Col>
    )
  });

  // Here we return our array of petsItems wrapped inside a parent div
  return (
    <Row>
      {/* <Col m={4} s={12}> */}
        {renderedList}
      {/* </Col> */}
    </Row>
  );
};

export default HumanList;
