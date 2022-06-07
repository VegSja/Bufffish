const express = require("express")
const db = require("../database/database")

function getUserDetail(req, res) {
  db.get("SELECT firstname, lastname, email FROM user WHERE user_id = ?;", [req.params.userId], (err, row) => {
    if(err) {
      console.error(err.message)
      res.status(400).json({"error": err.message})
      return;
    }
    res.json(row)
  })
}

module.exports = {
  getUserDetail
}
