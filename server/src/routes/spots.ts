import express from 'express'
import Spot from '../database/models/Spot'
import multer, {memoryStorage} from "multer"
import { uploadToS3 } from '../services/s3'
import checkUserToken from '../middlewares/checkUserToken'

const router = express.Router()

const storage = memoryStorage()
const upload = multer({storage})

router.post('/', checkUserToken, async (req, res) => { // Tested
    const { body } = req
    const { coords, name, desc, type, stars, police } = body
    const spotId = await Spot.countDocuments() + 1

    // Spot to be saved
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

router.post("/image", upload.single("image"), async (req, res) => { // Not Tested
    const { file } = req;
    const spotId = Number(req.headers["spot-id"]) 
    if (!file || !spotId) return res.status(400).json({message: "Bad request"})

    const {error, key}:any = uploadToS3(file, spotId)

    if ({error}) return res.status(500).json({message: error.message})

    return res.status(201).json({key})
})

export default router
