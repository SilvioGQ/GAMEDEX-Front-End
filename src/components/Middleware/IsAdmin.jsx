import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function IsAdmin ({ children }) {
    let user = localStorage.getItem('user');
    user=JSON.parse(user)
    const navigate = useNavigate()
    useEffect(() => {
        if(!user.is_data_master){
            navigate("/jogos")
        }
    }, [])
    return children
}