const express = require('express')
const app = express()
const path = require('path')
const members = require('./Members')

const PORT = process.env.PORT || 5000

// This route gets all members 
app.get('/api/members', (req, res) => res.json(members))

// Lets express serve everything in the public directory, html, css etc...
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))