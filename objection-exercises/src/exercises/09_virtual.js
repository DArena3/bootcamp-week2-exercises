const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const people = await User.query()
  people.forEach(person => {
    console.log(person.fullName)
  })
  // -----
  cleanup()
}

run()
