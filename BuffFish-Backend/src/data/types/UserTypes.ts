export type UserPostRequest = {
   email: string,
   username: string,
   firstname?: string,
   lastname?: string
}


export type User = UserPostRequest & {
   id: string
}
