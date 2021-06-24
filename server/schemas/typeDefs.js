const { gql } = require('apollo-server-express')

const typeDefs = gql`
  type Dog {
    _id: ID
    name: String
    breed: String
    location: String
    age: Int
  }

  type Human {
    _id: ID
    name: String
    location: String
    email: String
    password: String
  }

  type Auth {
    token: ID!
    human: Human
  }
  
  type Query {
    dogs: [Dog]
    humans: [Human]
  }

  type Mutation {
    addDog(name: String!, breed: String!, location: String!, age: Int!): Dog
    addHuman(name: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }`

module.exports = typeDefs