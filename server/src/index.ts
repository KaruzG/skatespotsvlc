import express from "express"
import userRouter from './routes/users'
import 'dotenv/config'

const app  = express();
const PORT = 5000

app.use(express.json())

app.use('/api/users', userRouter)

app.listen(PORT);