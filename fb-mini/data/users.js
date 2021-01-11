const casual = require('casual')
const passwordHash = require('password-hash')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  created_at: casual.moment,
  updated_at: casual.moment,
  first_name: casual.first_name,
  last_name: casual.last_name,
  birthday: casual.moment,
  password_hash: passwordHash.generate(casual.word),
  bio: casual.description,
  location: casual.word
}))

const userData = []

for (let i = 0; i < 20; i++) {
  userData.push(casual.user)
}

module.exports = userData
