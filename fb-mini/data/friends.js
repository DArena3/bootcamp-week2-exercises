const casual = require('casual')
const userData = require('./users')

casual.define('friend', ({ id: uid1 }, { id: uid2 }) => ({
    id: casual.uuid,
    sender_id: uid1,
    recipient_id: uid2,
    status: casual.random_element(['sent', 'accepted', 'declined'])
}))

const friendData = []

for (let i = 0; i < 30; i++) {
    const index1 = Math.floor(Math.random() * userData.length)
    do {
        index2 = Math.floor(Math.random() * userData.length)
    } while (index2 === index1)

    const user1 = userData[index1]
    const user2 = userData[index2]
    friendData.push(casual.friend(user1, user2))
}

module.exports = friendData