import mongoose from "mongoose";
import {Activity} from "../data/types/ActivityTypes";

const ActivitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    distance: {
        type: Number,
        required: false
    },
    moving_time: {
        type: Number,
        required: false
    },
    elapsed_time: {
        type: Number,
        required: false
    },
    total_elevation_gain: {
        type: Number,
        required: false
    },
    type: {
        type: String,
        required: false
    },
    workout_type: {
        type: String,
        required: false
    },
    start_date: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Date',
        required: true
    },
    position: {
        lat: {type: Number, required: true},
        lng: {type: Number, required: true}
    },
    average_speed: {
        type: Number,
        required: false
    },
    max_speed: {
        type: Number,
        required: false
    },
    average_cadence: {
        type: Number,
        required: false
    },
    average_watts: {
        type: Number,
        required: false
    },
    weighted_average_watts: {
        type: Number,
        required: false
    },
    kilojoules: {
        type: Number,
        required: false
    },
    has_heartrate: {
        type: Boolean,
        required: true
    },
    average_heartrate: {
        type: Number,
        required: false
    },
    max_heartrate: {
        type: Number,
        required: false
    },
    max_watts: {
        type: Number,
        required: false
    },
    suffer_score: {
        type: Number,
        required: false
    }, 
    resource_state: {
        type: Number,
        required: false
    },
})

interface activityModelInterface extends mongoose.Model<any> {
    build(attr: Activity): any
}

export const ActivityModel = mongoose.model<any, activityModelInterface>('Activity', ActivitySchema)
