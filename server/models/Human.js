const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const humanSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: false
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Must match an email address!'],
    },
    password: {
      type: String,
      required: true,
      minlength: 5,
    },
  }
)

//use pre-save middleware to hash user password
humanSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});
//compare the incoming password with the hashed password
humanSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Human = model('Human', humanSchema)

module.exports = Human