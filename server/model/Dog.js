const { Schema, model } = require('mongoose')

const dogSchema = new Schema(
  {
    name: {
      type: String,
      required: true,

    },
    breed: {
      type: String,
    },
    location: {
      type: String,
      required: true
    },
    age: {
      type: Number
    },
  }
)

const Dog = model('Dog', dogSchema)

module.exports = Dog