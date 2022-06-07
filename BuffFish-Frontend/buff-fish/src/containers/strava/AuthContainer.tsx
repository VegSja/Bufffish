import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"

export default function AuthContainer() {

    const navigate = useNavigate();
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const code = queryParams.get("code");
        if(code) {
            axios.post('/auth/strava', {
                code: code
            }).then((res) => {
                console.log(res);
                navigate('/', {state:{loggedInUser:res.data.data.user_id}});
            }).catch((err) => {
                console.error(err);
            })
        }
    }, [])


    return(
        <div>
            Authenticating....
        </div>
    )
}
