const casual = require('casual')
const userData = require('./users')

casual.define('post', ({ id: uid }) => ({
    id: casual.uuid,
    user_id: uid,
    text: casual.text,
    likes: casual.integer(from = 0, to = 5000),
    created_at: casual.moment,
    updated_at: casual.moment,
}))

const postData = []

for (let i = 0; i < 30; i++) {
    let user = userData[Math.floor(Math.random() * userData.length)]
    postData.push(casual.post(user))
}

module.exports = postData