const { Schema, model } = require('mongoose')

const dogSchema = new Schema(
  {
    id: {
      type: Number,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
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