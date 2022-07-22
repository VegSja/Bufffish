const express = require('express')
const db = require("../database/database")
const axios = require("axios")
const { v4: uuidv4 } = require("uuid")

const getAuthCode = async (userId, callback) => {
  db.get("SELECT strava_access_code AS accessCode FROM user WHERE user_id = ?", [userId], (err, row) => {
    if(err) {
      console.error(err.message);
    }
    callback(row["accessCode"]);
  })
}

const createDate = async(date, callback) => {
  const dateParsed = date.split(" ")[0].split("-");
  const data = [
    date.split(" ")[0], //id
    dateParsed[2], //day
    dateParsed[1], //month
    dateParsed[0] //year
  ]
  const sql = `
  INSERT INTO dates(date_id, day, month, year) VALUES(?,?,?,?);
`
  db.run(sql, data, (err, result) => {
    callback(data[0]); //Return date_id
  })
}

async function getStravaActivities(userId, access_code) {
  getAuthCode(userId, (access_code) => {
    axios.get("https://www.strava.com/api/v3/athlete/activities", {
      headers: {
        "Authorization": `Bearer ${access_code}`
      }
    }).then((response) => {
        response.data.forEach(activity => {
          const generated_id = uuidv4();
          createDate(activity.start_date, (date_id) => {
            const sql = `
            INSERT INTO activity
              (id,
              strava_id,
              athlete,
              name,
              type,
              distance,
              moving_time,
              elapsed_time,
              elevation_gain,
              date_id,
              start_lat,
              start_lng,
              end_lat,
              end_lng,
              average_speed,
              max_speed)
            VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
            `
            const params = [
              generated_id,
              activity.id,
              userId,
              activity.name,
              activity.type,
              activity.distance,
              activity.moving_time,
              activity.elapsed_time,
              activity.total_elevation_gain,
              date_id,
              activity.start_latlng[0],
              activity.start_latlng[1],
              activity.end_latlng[0],
              activity.end_latlng[1],
              activity.average_speed,
              activity.max_speed
            ]
            db.run(sql, params, (err, result) => {
              if(err) {
                console.error(err.message);
              } else {
                console.log(`Successfully added ${activity.name} to database`)
              }
            })
          })
        })
    })
  })
}

async function getUserActivities(req, res) {
  const user = req.params.userId
  await getStravaActivities(user)
  const activities = []
  db.each(`SELECT id FROM activity`,
          (err, data) => {
            if(err) {
              console.error(err.message);
              res.status(500).json({
                message: err.message
              })
            } else {
              activities.push(data["id"]);
            }
          },
          (err, numberOfRows) => {
            console.log("Successfully found ", numberOfRows, " rows")
            res.status(200).json({
              "data": activities
            })
          })
}

const getActivityDetail = (req, res) => {
  const requestedActivity = req.params.activityId;
  db.get(`SELECT * FROM activity WHERE id=?`, [requestedActivity],
         (err, row)=> {
           if(err) {
             console.error(err.message)
             res.status(400).json({
               "error": err.message
             })
             return;
           } else {
             res.status(200).json(row)
           }
         })
}

const getWeeklyActivities = (req, res) => {
  const request_user = req.params.userId;
  const activities = []
  db.each(`
    SELECT *
    FROM activity
    RIGHT OUTER JOIN dates ON(date_id)
    WHERE activity.athlete = ?;
  `, [request_user],
     (err, data) => {
         if(err) {
           console.error(err.message);
           res.status(500).json({
             message: err.message
           })
         } else {
           activities.push(data);
         }
     },
    (err, numberOfRows) => {
      if(!err) {
        res.status(200).json({
          "data": activities
        })
      }
    }
  );
}

module.exports = {
  getUserActivities,
  getActivityDetail
}
