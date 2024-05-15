import mongoose, { Schema, model } from 'mongoose'

const spotSchema = new Schema({
    spotId: Number,
    coords: {alt: Number, lat: Number },
    name: String,
    desc: String,
    type: Number,
    stars: Number,
    police: Number,
    images: [

    ],
    comments: [
        {
        user_id: {
            type: Number,
            ref: 'User'
        },
        comment: String,
        }
    ]
})

const Spot = model('Spot', spotSchema)

export default Spot