import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function IsAdmin ({ children }) {
    const user = localStorage.getItem('user');
    const navigate = useNavigate()

    useEffect(() => {
        if(user && !user.is_data_master){
            navigate("/jogos")
        }
    }, [])
    

    return children
}