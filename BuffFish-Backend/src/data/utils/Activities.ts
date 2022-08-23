import {Date} from "../../models/date"
import {ActivityModel} from "../../models/activity"
import {Activity} from "../types/ActivityTypes";

export const createDate = (date: string) : string => {
  const dateParsed = date.split(" ")[0].split("-");
  const id: string = date.split(" ")[0]
  Date.build({
    id: id, 
    day: Number(dateParsed[2]), 
    month: Number(dateParsed[1]), 
    year: Number(dateParsed[0]) 
  })
  return id
}

export const getUserActivities = (userId: string): Activity[] => {
    ActivityModel.find({user: userId}, (err: any, activities: Activity[]) => {
        if (err){
            console.error(err.message)
            Error("Could not find item in DB")  
        } else {
            return activities
        }
        return []
    })
    return []
}

export const getActivityDetail = (activityId: string) : Activity | undefined => {
  ActivityModel.findById(activityId, (err: any, activity: Activity) => {
    if (err){
        console.error(err.message)
        Error("Could not find item in DB")  
        return undefined
    } else {
        return activity
    }
  })
  return undefined 
}

