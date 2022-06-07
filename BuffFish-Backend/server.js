const express = require('express')

// Routes
const authRouter = require('./routes/AuthRoutes')
const userRouter = require('./routes/UserRoutes')

//Middleware
const cookieParser = require('cookie-parser')
const cors = require('cors')

// App variables
const app = express()
require('dotenv').config()

const DATABASE_URL = "127.0.0.1"
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
app.use('/auth', authRouter);


const PORT = 8000;

app.listen(PORT, () => {
  console.log("Server is listening on port", PORT)
})
