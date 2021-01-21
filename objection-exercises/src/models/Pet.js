// Write your Pet model here!
const BaseModel = require('./BaseModel')
const { BelongsToOneRelation } = require('./BaseModel') 
const User = require('./User')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    return {
        owner: {
            relation: BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'pets.ownerId',
                to: 'users.id'
            }
        }
    }
  }
}

module.exports = Pet
