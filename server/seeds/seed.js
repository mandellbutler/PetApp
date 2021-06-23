const db = require('../config/connection')
const { Dog, Human } = require('../models')
const dogData = require('./dogData.json')
const humanData = require('./humanData.json')

db.once('open', async () => {

  await Dog.deleteMany({})
  await Human.deleteMany({})

  const dogs = await Dog.insertMany(dogData);
  const human = await Human.insertMany(humanData);

  process.exit(0)
})