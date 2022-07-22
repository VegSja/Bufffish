export interface ActivityResponse {
   id: string;
    strava_id: string;
    athlete: string;
    name: string;
    "type": string;
    distance: number;
    moving_time: number;
    elapsed_time: number;
    elevation_gain: number;
    date_id: string;
    start_lat?: string;
    start_lng?: string;
    end_lat?: string;
    average_speed: number;
    max_speed: number;
}

export interface ActivityTableEntry {
    id: number;
    name: string;
    activity_type: string;
    distance: number;
    moving_time: number;
}
