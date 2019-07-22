const moment = require('moment')

// Logger, called for every get request, prints the url
const logger = (req, res, next) => {
    console.log(`${req.protocol}:/${req.get('host')}${req.originalUrl}:${moment().format()}`)
    next()
}

module.exports = logger