import express from "express"
import mongoose from "mongoose"
import userRouter from './routes/users'
import spotRouter from './routes/spots'
import 'dotenv/config'

const cors = require('cors')
const app  = express();
const PORT = 5000


app.use(express.json())
app.use(cors())
app.listen(PORT);

mongoose.connect(process.env.MONGO_DB_URL!)

// Routes
app.use('/api/users', userRouter)
app.use('/api/spots', spotRouter)

app.get("/", (req, res) => {
    res.send("NodeJs Up!")
})

app.get('/test', async (req, res) => {
    let dbStatus
    switch (mongoose.connection.readyState) {
        case 0:
            dbStatus = "Disconnected"
            break;
        
        case 1:
            dbStatus = "Connected"
            break;

        case 2:
            dbStatus = "Connecting"
            break;

        case 3:
            dbStatus = "Disconnecting"
            break;
    
        default:
            dbStatus = "Error!"
            break;
    }

    res.send(`<h2> NodeJS: Running </h2><h2> DB Status: ${dbStatus} </h2>`)
})
