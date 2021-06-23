const { Dog, Human } = require('../models')

const resolvers = {
  Query: {
    dogs: async () => {
      return await Dog.find({}).populate('dogs')
    },
    humans: async () => {
      return await Human.find({}).populate('humans')
    }
  },

  Mutation: {
    addDog: async (parent, { name, breed, location, age }) => {
      return await Dog.create({ name, breed, location, age })
    },
    addHuman: async (parent, { name, location }) => {
      return await Human.create({ name, location })
    }
  }
}

module.exports = resolvers