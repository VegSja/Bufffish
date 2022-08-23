import {Coordinate} from "./GeneralTypes";
import {ActivityType} from "./StravaTypes";


export type Activity = {
    id: number,
    name: string,
    resource_state?: number,
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
}
