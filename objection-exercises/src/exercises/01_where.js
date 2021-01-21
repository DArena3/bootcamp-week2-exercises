const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const percivals = await User.query().where('firstName', 'Percival')
  console.log(percivals)

  // Do the same with object notation
  const percivals2 = await User.query().where({firstName: 'Percival'})
  console.log(percivals2)

  // Get all DOGS and BIRDS
  const dogsBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsBirds)
  // -----
  cleanup()
}

run()
