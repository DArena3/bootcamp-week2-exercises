const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const newPerson = await User.query().insertGraph({
    firstName: 'Peter',
    lastName: 'Bynum',
    email: 'email@hsa.dev',
    pets: [
      {
        name: 'Rocco',
        type: 'DOG'
      },
      {
        name: 'Rosey',
        type: 'DOG'
      }
    ]
  })
  console.log(newPerson)
  // -----
  cleanup()
}

run()
