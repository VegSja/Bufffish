import mongoose from 'mongoose'
import express from 'express'
import userRouter from './routes/UserRoutes'

//Middleware
import cookieParser  from 'cookie-parser'
import cors  from 'cors'

// App variables
const app = express()
require('dotenv').config()

const DATABASE_URL = 'mongodb+srv://buffish_admin:SterkFisk123@buffishcluster1.xhebixf.mongodb.net/?retryWrites=true&w=majority'
const ALLOW_ORIGIN = "127.0.0.1"

// App config
app.use(cors({
  credentials: true,
  origin: ALLOW_ORIGIN
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cookieParser())

// Setting up routes
app.use('/user', userRouter);
// app.use('/auth', authRouter);


mongoose.connect(DATABASE_URL, {}, () => {
    console.log("Connected to database")
})


const PORT = 8000;

app.listen(PORT, "0.0.0.0", () => {
  console.log("Server is listening on port", PORT)
})
