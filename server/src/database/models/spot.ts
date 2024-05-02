import mongoose, { Schema } from 'mongoose'

const spotSchema = new Schema({
    id: Number,
    coords: {alt: Number, lat: Number },
    name: String,
    desc: String,
    type: Number,
    stars: Number,
    police: Number,
    comments: [
        {
        user_id: Number,
        comment: String,
        }
    ]
})

export default spotSchema