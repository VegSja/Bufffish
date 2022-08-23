import {Coordinate} from "./GeneralTypes";

export type ActivityType = "Ride";

export type StravaErrorAPIResponse = {
    errors: StravaError[],
    message: string
}

export type StravaActivityAPIResponse = {
    data: StravaActivity[]
}

export type StravaError = {
    code: string,
    field: string,
    resource: string
}

export type StravaActivity = {
    id: number,
    name: string,
    distance?: number,
    moving_time?: number,
    elapsed_time?: number,
    total_elevation_gain?: number,
    type?: ActivityType,
    workout_type?: null,
    start_date?: string,
    start_date_local?: string,
    start_latlng?: Coordinate,
    end_latlng?: Coordinate,
    average_speed?: number,
    max_speed?: number,
    average_cadence?: number,
    average_watts?: number,
    weighted_average_watts?: number,
    kilojoules?: number,
    has_heartrate?: boolean,
    average_heartrate?: number,
    max_heartrate?: number,
    max_watts?: number,
    suffer_score?: number  
    resource_state?: number,
}
