import { Button } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useLocation } from "react-router-dom";

interface CusomizedState {
    loggedInUser: string
}


export default function HomePageContainer() {
    const[name, setName] = useState("");

    const location = useLocation();
    const state = location.state as CusomizedState;
    if(state) {
        const { loggedInUser } = state;
        if(loggedInUser) {
            axios.get(`/user/${loggedInUser}/`)
                .then((res) => {
                    setName(`${res.data.firstname} ${res.data.lastname}`)
                })
                .catch((err) => {
                    console.error(err.message())
                })
    }

    }

    return(
        <div>
            <h1>Hey, {name}!</h1>
            <Button
                variant="contained"
                onClick={() => {
                    window.location.replace("https://www.strava.com/oauth/authorize?client_id=86702&redirect_uri=http://localhost:3000/auth/strava&approval_prompt=force&scope=read,activity:read&response_type=code")
                }}>Log In Strava
            </Button>
        </div>
    )
}
