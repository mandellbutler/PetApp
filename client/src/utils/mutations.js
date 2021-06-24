import { gql } from '@apollo/client';

export const ADD_DOGS = gql`
  mutation addDog(name: String!, breed: String!, location: String!, age: Int!): Dog {
    addDog(name: $name, breed: $breed, location: $location, age: $age) {
      _id
      name
      breed
      location 
      age
    }
  }
`;

export const ADD_HUMANS = gql`
mutation addHuman(name: String!, location: String!): Human {
  addHuman(name: $name, location: $location) {
    _id
    name
    location
  }
}`