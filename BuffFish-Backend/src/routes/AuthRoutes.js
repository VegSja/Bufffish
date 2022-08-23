const express = require('express')
const router = express.Router()
const {
  postStravaAuth
} = require('../controllers/AuthController')

router.route('/strava/')
      .post(postStravaAuth)

export default router
