const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersPets = await User.query().withGraphFetched('pets')
  console.log(usersPets)
  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query().withGraphFetched('[pets, children]')
  console.log(usersPetsChildren)
  // Get all users, their parents, and their grandparents
  const usersParentsGrandparents = await User.query().withGraphFetched('[parents, parents.parents]')
  console.dir(usersParentsGrandparents, { depth: null })
  // Get all users, their pets, their chilren, and their childrens' pets
  const usersPetsChildrenPets = await User.query().withGraphFetched('[pets, children, children.pets]')
  console.dir(usersPetsChildrenPets, { depth: null })
  // -----
  cleanup()
}

run()
