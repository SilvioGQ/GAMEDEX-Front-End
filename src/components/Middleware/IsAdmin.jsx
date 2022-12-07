import { parseJwt } from "../../resource/decodeToken"
import { useState, useEffect } from "react"
import { GetUserById } from "../../pages/api"
import { useNavigate } from "react-router-dom";

export default function IsAdmin ({ children }) {
    const token = localStorage.getItem('token');
    const parsedJWT = parseJwt(token);
    const navigate = useNavigate()
    const [user, setUser] = useState(null)

    const getUser = async () => {
        let res = await GetUserById(parsedJWT.id)
        setUser(res);
        if(res.user && !res.user.is_data_master){
            navigate("/jogos")
        }
    }

    useEffect(() => {
        if(!user){
            getUser();
        }
    }, [])
    

    return children
}