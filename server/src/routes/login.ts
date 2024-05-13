import express, { request } from 'express'
import User from '../database/models/User'
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');


const router = express.Router()

router.post("/", async (req, res) => {
    const {body} = req
    const {username, password} = body

    const user = await User.findOne({username})
    const passwordCorrect = user === null
        ? false
        : await bcrypt.compare(password, user.password)
    
    if (!(user && passwordCorrect)) { 
        return res.status(401).json({
            error: 'invalid user or password'
        })
     }

     const userForToken = {
        id: user._id,
        name: user.username,
     }

     const token = jwt.sign(userForToken, process.env.SECRET)

     res.send({
        name: user.username,
        type: user.type,
        token: token
     })
})

export default router