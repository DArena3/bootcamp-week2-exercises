const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

   const numOfPets = await User.transaction(async trx => {
     const nick = await User.query(trx).insert({
       email: "nick@nick.com",
       firstName: "Nick",
       lastName: "Rommel",
       age: 19
     })
     console.log(nick)
     const asa = await nick.$relatedQuery('pets', trx).insert({ name: 'Asa', type: 'DOG' })
     console.log(asa)
     const numPets = await Pet.query(trx).resultSize()
     if (numPets > 15) await Pet.query(trx).delete()
     throw new Error('this is an error')
   })

  // -----
  cleanup()
}

run()
