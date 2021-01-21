const cleanup = require('../lib/cleanup')
// Import models
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Delete all CATS
  const myDelete = await Pet.query().delete().where('type', 'CAT')
  console.log(myDelete)
  // -----
  cleanup()
}

run()
