import { gql } from '@apollo/client';

export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
  	human {
      name
      location
    }
  }
}
`;

export const ADD_DOGS = gql`
  mutation addDog($name: String!, $breed: String!, $location: String!, $age: Int!) {
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
mutation addHuman($name: String!, $email: String!, $password: String!) {
  addHuman(name: $name, email: $email, password: $password) {
    token
  	human {
      name
      location
    }
  }
}
`