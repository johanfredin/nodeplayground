const mongoose = require('mongoose')
const dbUrl = 'mongodb://localhost:27017/members'

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.error(`Could not connect to database at ${dbUrl}`)
    } else {
        console.info(`Connection established to db at ${dbUrl}`)
    }
})

const Model = mongoose.model('Member', {
    name: String,
    email: String,
    active: String
})

module.exports = Model