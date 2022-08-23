import express from "express";
import {
  getUserDetail,
  postNewUser
} from "../controllers/UserController"

const router = express.Router()

router.route('/')
      .post(postNewUser)
    
router.route('/:userId/')
      .get(getUserDetail)


export default router
