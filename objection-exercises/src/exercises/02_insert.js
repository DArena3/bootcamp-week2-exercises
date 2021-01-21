const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const myUser = await User.query().insert({
    email: 'david@davidarena.com',
    firstName: 'David',
    lastName: 'Arena',
    age: 19,
    created_at: new Date(),
    updated_at: new Date()
  })
  console.log(myUser)
  console.log(myUser.id)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const myPet = await Pet.query().insert({
    ownerId: myUser.id,
    name: 'Libby',
    type: 'DOG',
    created_at: new Date(),
    updated_at: new Date()
  })
  console.log(myPet)
  // -----
  cleanup()
}

run()
