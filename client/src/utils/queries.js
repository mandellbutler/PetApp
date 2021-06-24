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

export const QUERY_HUMANS = gql`
  query allHumans {
    humans {
      _id
      name
      location
    }
  }`