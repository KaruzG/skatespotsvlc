import mongoose from 'mongoose'
import express from 'express'
import User from '../database/models/User'


const router = express.Router()

router.post('/', async (req, res) => {
    await mongoose.connect(process.env.MONGO_DB_URL!)

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

router.get('/', (req, res) => {
    res.send("USER!")
})

export default router