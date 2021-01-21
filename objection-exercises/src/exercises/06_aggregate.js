const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the total number of users
  const userNum = await User.query().resultSize()
  console.log(userNum)
  // Get the average age of users
  const avgAge = await User.query().avg('age as avgAge')
  console.log(avgAge)
  // Get the total number of dogs
  const dogNum = await Pet.query().where('type', 'DOG').resultSize()
  console.log(dogNum)
  // -----
  cleanup()
}

run()
