const express = require('express')
const router = express.Router()
const MemberModel = require('../../model/MemberModel')

// gets all members 
router.get('/', (req, res) => {
    MemberModel.find().lean().exec((err, members) => {
        if (err) {
            return res.json({ msg: 'Could not retrieve members' })
        }
        res.json(members)
    })
})

// Get a single member
router.get('/:id', (req, res) => {
    MemberModel.findById(req.params.id).lean().exec((err, member) => {
        if (err) {
            res.status(400).json({ msg: `No member with id ${req.params.id}` })
        } else {
            res.json(member)
        }
    })
})

// Create member
router.post('/', (req, res) => {
    const newMember = new MemberModel({
        name: req.body.name,
        email: req.body.email,
        status: "active"
    })

    if (!newMember.name || !newMember.email) {
        return res.status(400).json({ msg: 'Please include a name and email' })
    }

    newMember.save().then(() => console.log('Member persisted'))
    res.json(newMember) // return all members
})

// Update member
router.put('/:id', (req, res) => {
    
    const updateMember = {
        name: req.body.name,
        email: req.body.email
    }

    console.log(updateMember)

    MemberModel.findById(req.params.id, (err, member) => {
        if (err) {
            res.status(400).json({ msg: `No member with id ${req.params.id}` })
        } else {
            member.name = updateMember.name
            member.email = updateMember.email
            member.save().then(() => res.json({msg: 'Member updated', member}))
        }
    })
})

// Delete member
router.delete('/:id', (req, res) => {
    MemberModel.findByIdAndDelete(req.params.id, (err, member) => {
        if (err) {
            res.json({ msg: 'Could not remove member with id ' + req.params.id })
        } else {
            console.log('Member deleted')
        }
    })
})

module.exports = router