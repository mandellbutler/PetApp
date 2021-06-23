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
  }
  
  type Query {
    dogs: [Dog]
    humans: [Human]
  }

  type Mutation {
    addDog(name: String!, breed: String! location: String! age: Int!)
    addHuman(name: String!, location: String!)
  }`

module.exports = typeDefs