const express = require('express')
const app = express()
const path = require('path')
const logger = require('./middleware/logger.js')

const PORT = process.env.PORT || 5000

app.use(logger)

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))

// Lets express serve everything in the public directory, html, css etc...
app.use(express.static(path.join(__dirname, 'public')))

// Members API Route
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))