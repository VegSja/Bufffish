import {Request, Response} from "express"
import {UserPostRequest} from "../data/types/UserTypes"
import {createUser} from "../data/utils/User"

export const getUserDetail = (req: Request, res: Response) => {
    

}

export const postNewUser = (req: Request, res: Response) => {
    const req_user: UserPostRequest = req.body
    res.status(200).json(
        createUser(req_user)
    )
}

