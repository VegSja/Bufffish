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

function getUserActivities(req, res) {
  const request_user = req.params.userId;
  getAuthCode(request_user, (access_code) => {
    axios.get("https://www.strava.com/api/v3/athlete/activities", {
      headers: {
        "Authorization": `Bearer ${access_code}`
      }
    }).then((response) => {
      //Create dateentry in database
      createDate(date, (date_id) => {
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
          start_date,
          start_lat,
          start_lng,
          end_lat,
          end_lng,
          average_speed,
          max_speed)
        VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?);
        `
        const activities = [];
        response.data.forEach(activity => {
          const generated_id = uuidv4();
          console.log("Adding activity", activity.name)
          const params = [
            generated_id,
            activity.id,
            request_user,
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
          db.run(sql, params, (err, result) => {})
        })
        db.each(`SELECT id FROM activity WHERE athlete=?`, [request_user],
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
      })
    })
  });
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

module.exports = {
  getUserActivities,
  getActivityDetail
}
