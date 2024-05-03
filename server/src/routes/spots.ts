import express from 'express'
import Spot from '../database/models/Spot'

const router = express.Router()

router.post('/', async (req, res) => {
    const { body } = req
    const { coords, name, desc, type, stars, police } = body

    const spotId = 1

    const spot = new Spot({
        spotId,
        coords,
        name,
        desc,
        type,
        stars,
        police,
    })

    const savedSpot = await spot.save()

    res.json(savedSpot)
})

export default router