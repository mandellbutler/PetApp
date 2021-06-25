const { Dog, Human } = require('../models')
const { AuthenticationError, UserInputError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    dogs: async () => {
      return await Dog.find({}).populate('dogs')
    },
    humans: async () => {
      return await Human.find({}).populate('humans')
    },
    //allows logged in user to be retrieved
    me: async (parent, args, context) => {
      if (context.human) {
        return Human.findone({ _id: context.human._id });
      }
      throw new AuthenticationError('You must be logged in to view this page!');
    },
  },

  Mutation: {
    addDog: async (parent, { name, breed, location, age }) => {
      return await Dog.create({ name, breed, location, age })
    },
    addHuman: async (parent, { name, email, password }) => {
      const human = await Human.create({ name, email, password });
      const token = signToken(human);

      return { token, human };
    },
    login: async (parent, { email, password }) => {
      const human = await Human.findOne({ email });

      if (!human) {
        throw new AuthenticationError('Sorry...email not found!');
      }

      const correctPw = await human.isCorrectPassword(password);
      console.log("PW: ", correctPw)
      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(human);

      return { token, human };
    }
  }
}

module.exports = resolvers