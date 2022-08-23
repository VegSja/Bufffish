import mongoose from "mongoose";
import {DateType} from "../data/types/GeneralTypes"

const DateSchema = new mongoose.Schema({
    day: {
        type: Number,
        required: true
    },
    month: {
        type: Number,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
})

interface dateModelInterface extends mongoose.Model<any> {
    build(attr: DateType): any
}

export const Date = mongoose.model<any, dateModelInterface>('Date', DateSchema)

