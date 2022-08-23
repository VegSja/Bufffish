import {User, UserPostRequest} from "../types/UserTypes";
import {UserModel} from "../../models/user"

export const createUser = (user: UserPostRequest) : User => {
    const createdUser = new UserModel({...user})
    return createdUser;
}
