const axios = require("axios")
const express = require('express')
const { v4: uuidv4 } = require("uuid")
const db = require("../database/database")

function postStravaAuth(req, res, next) {
  console.log("Request Body: ", req.body);
  if(!req.body.code) {
    req.status(400).json({
      success: false,
      data: "Requires code in body of request!"
    })
  } else {
    axios.post("https://www.strava.com/api/v3/oauth/token", null,
               {
                 params: {
                   client_id: 86702,
                   client_secret: "447fda352c09c8cd70084f80bdcae3d2391a7acd",
                   code: req.body.code,
                   grant_type: "authorization_code"
                 }
               })
         .then((response) => {
           const sql = `INSERT INTO user
                  (user_id, auth_code, strava_access_code, strava_refresh_token, firstname, lastname, email)
                  VALUES (?,?,?,?,?,?,?);
                `
           console.log("Recieved authentication response from Strava:", response.data.access_token)
           const unique_id = uuidv4();
           const data = {
             user_id: unique_id,
             firstname: response.data.athlete.firstname,
             lastname: response.data.athlete.lastname
           }
           var params = [unique_id, req.body.code, response.data.access_token, response.data.refresh_token, response.data.athlete.firstname, response.data.athlete.lastname, null]
           db.run(sql, params, (err, result) => {
             if (err){
               console.error("An error occured trying to insert user into db:", err.message);
                res.status(400).json({"error": err.message})
                return;
             }
             res.status(200).json({
               "data": data
             })
           })
         })
         .catch((err) => {
           console.error("Error from Strava Auth:", err);
         })
  }
}

module.exports =  {
  postStravaAuth
}
