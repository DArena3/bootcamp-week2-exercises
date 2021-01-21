const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>)
  const david = await User.query().findById('406515d0-7b03-4036-87f5-ab42e1239d0c')
  // Use that instance to create a new pet related that user
  await david.$relatedQuery('pets').insert({ name: 'Ferris', type: 'DOG' })

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const davidPetsChildren = await david.$fetchGraph('[pets, children]')
  console.log(davidPetsChildren)
  // -----
  cleanup()
}

run()
