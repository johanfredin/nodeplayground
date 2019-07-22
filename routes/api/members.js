const express = require('express')
const members = require('../../Members')
const uuid = require('uuid')
const router = express.Router()

// gets all members 
router.get('/', (req, res) => res.json(members))

// Get a single member
router.get('/:id', (req, res) => {
    const requestedId = parseInt(req.params.id)
    const found = members.some(member => member.id === requestedId)
    if (found) {
        res.json(members.filter(member => member.id === requestedId))
    } else {
        res.status(400).json({ msg: `No member with id ${requestedId}` })
    }
})

// Create member
router.post('/', (req, res) => {
    const newMember = {
        id: uuid.v4(), // generate new uuid
        name: req.body.name,
        email: req.body.email,
        status: "active"
    }

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' })
    }

    members.push(newMember)
    res.json(members) // return all members
})

// Update member
router.put('/:id', (req, res) => {
    const requestedId = parseInt(req.params.id)
    const found = members.some(member => member.id === requestedId)
    if (found) {
        const updateMember = req.body
        members.forEach(member => {
            if(member.id === parseInt(req.params.id)) {
                member.name = updateMember.name ? updateMember.name : member.name
                member.email = updateMember.email ? updateMember.email : member.email

                res.json({msg: 'Member was updated', member})
            }
        })
        res.json(members.filter(member => member.id === requestedId))
    } else {
        res.status(400).json({ msg: `No member with id ${requestedId}` })
    }
})

// Delete member
router.delete('/:id', (req, res) => {
    const requestedId = parseInt(req.params.id)
    const found = members.some(member => member.id === requestedId)
    if (found) {
        res.json({
            msg: 'Member deleted',
            members: members.filter(member => member.id !== requestedId)
        })
    } else {
        res.status(400).json({ msg: `No member with id ${requestedId}` })
    }
})

module.exports = router