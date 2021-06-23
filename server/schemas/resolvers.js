const { Dog, Human } = require('../models')

const resolvers = {
  Query: {
    dogs: async () => {
      return await Dog.find({}).populate('dogs')
    },
    humans: async () => {
      return await Human.find({}).poopulate('humans')
    }
  },

  Mutation: {
    addDog: async (parent, args) => {
      
    },
    addHuman: async (parent, args) => {

    }
  }
}

module.exports = resolvers