const express = require("express");
const router = express.Router()
const {
  getUserActivities,
  getActivityDetail
} = require('../controllers/ActivitiesController')
const {
  getUserDetail
} = require("../controllers/UserController")

router.route('/:userId/')
      .get(getUserDetail)

router.route('/:userId/activities/')
      .get(getUserActivities)

router.route('/:userId/activities/:activityId/')
      .get(getActivityDetail)

module.exports = router
