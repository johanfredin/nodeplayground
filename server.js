const express = require('express')
const app = express()
const logger = require('./middleware/logger.js')

const PORT = process.env.PORT || 5000

app.use(logger)

// Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Members API Route
app.use('/api/members', require('./routes/api/members'))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))