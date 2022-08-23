import mongoose from "mongoose";
import {User} from "../data/types/UserTypes";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: false 
    },
    lastname: {
        type: String,
        required: false 
    }
})

interface activityModelInterface extends mongoose.Model<any> {
    build(attr: User): any
}

export const UserModel = mongoose.model<any, activityModelInterface>('User', UserSchema)

