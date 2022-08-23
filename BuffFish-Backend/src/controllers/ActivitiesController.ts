// import {DateType} from "../data/types/GeneralTypes"
// import {StravaActivityAPIResponse, StravaActivity} from "../data/types/StravaTypes"
// import {Activity} from "../models/activity"
// import {Date} from "../models/date"
// const express = require('express')
// const db = require("../database/database")
// const axios = require("axios")
// const { v4: uuidv4 } = require("uuid")
//
// const getAuthCode = async (userId: string, callback: (accessCode: string) => void) => {
// }
//
// const getWeeklyActivities = (req, res) => {
//   const request_user = req.params.userId;
//   const activities = []
//   db.each(`
//     SELECT *
//     FROM activity
//     RIGHT OUTER JOIN dates ON(date_id)
//     WHERE activity.athlete = ?;
//   `, [request_user],
//      (err, data) => {
//          if(err) {
//            console.error(err.message);
//            res.status(500).json({
//              message: err.message
//            })
//          } else {
//            activities.push(data);
//          }
//      },
//     (err, numberOfRows) => {
//       if(!err) {
//         res.status(200).json({
//           "data": activities
//         })
//       }
//     }
//   );
// }
//
// module.exports = {
//   getUserActivities,
//   getActivityDetail
// }
