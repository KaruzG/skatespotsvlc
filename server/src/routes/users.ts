import mongoose from 'mongoose'
import express from 'express'
import User from '../database/models/User'


const router = express.Router()

router.post('/', async (req, res) => {
    const { body } = req
    const { username, password, type } = body

    const user = new User({
        type,
        username,
        password: password,
        creation: new Date()
    })

    const savedUser = await user.save()

    res.json(savedUser)
    mongoose.connection.close()
})

router.get('/', async (req, res) => {
    res.send("Users Count: " + await User.countDocuments())
})

export default router