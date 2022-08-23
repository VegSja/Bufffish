async function getStravaActivities(userId: string, access_code: string) {
  // getAuthCode(userId, (access_code) => {
  //   axios.get("https://www.strava.com/api/v3/athlete/activities", {
  //     headers: {
  //       "Authorization": `Bearer ${access_code}`
  //     }
  //   }).then((response: StravaActivityAPIResponse) => {
  //       response.data.forEach((activity: StravaActivity) => {
  //         const generated_id = uuidv4();
  //         const date = createDate(activity.start_date) 
  //         Activity.build({
  //           id: generated_id,
  //           name: activity.name,
  //           distance: activity.distance
  //         })
  //       })
  //   }).catch((err: any) => {
  //       console.error(err)
  //   })
  // })
}
