import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import axios from "axios"
import { useAuthContext } from "../../hooks/useAuth";

export default function AuthContainer() {

    const {setUserId} = useAuthContext();

    const navigate = useNavigate();
    useEffect(() => {
        const queryParams = new URLSearchParams(window.location.search)
        const code = queryParams.get("code");
        if(code) {
            axios.post('/auth/strava', {
                code: code
            }).then((res) => {
                setUserId(res.data.data.user_id)
                navigate('/dashboard');
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
