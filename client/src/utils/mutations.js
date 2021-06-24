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