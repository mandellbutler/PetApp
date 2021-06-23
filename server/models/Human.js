const { Schema, model } = require('mongoose')

const humanSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    }
  }
)

const Human = model('Human', humanSchema)

module.exports = Human