const { Schema, model } = require('mongoose')

const humanSchema = new Schema(
  {
    id: {
      type: Number,
      primaryKey: true,
      autoIncrement: true,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      allowNull: false,
      validate: {
        len: [8]
      }
  }
}
)

const Human = model('Human', humanSchema)

module.exports = Human