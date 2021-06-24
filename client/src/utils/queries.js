import { gql } from '@apollo/client';

export const QUERY_DOGS = gql`
  query allDogs {
    dogs {
      _id
      name
      breed
      location
      age
    }
  }`