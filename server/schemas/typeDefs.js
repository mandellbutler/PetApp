const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Dog {
    _id: ID
    name: String
    breed: String
    location: String
    age: Int
  }`