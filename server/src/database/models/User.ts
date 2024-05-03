import { Schema, model } from 'mongoose'

const userSchema = new Schema({
    username: String,
    password: String,
    type: Number, // 0 - 1
    creation: Date
})

const User = model('User', userSchema)

// We dont want to fetch password
userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.password
    }
})


export default User