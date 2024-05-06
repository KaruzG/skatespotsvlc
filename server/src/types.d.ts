export type SpotType = 'Street' | 'Skatepark' | 'Skateshop'

export interface Spot {
    spotId: Number,
    coords: {alt: Number, lat: Number },
    name: String,
    desc: String,
    type: SpotType,
    stars: Number,
    police: Number,
    comments: [
        {
        user_id: Number,
        comment: String,
        }
    ]
}