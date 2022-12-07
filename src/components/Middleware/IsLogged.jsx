import { parseJwt } from "../../resource/decodeToken"
import { useState, useEffect } from "react"
import { GetUserById } from "../../pages/api"
import { useNavigate } from "react-router-dom";

export default function IsLogged ({ children }) {
    const token = localStorage.getItem('token');
    const navigate = useNavigate()
    
    useEffect(() => {
        if(!token){
            navigate("/")
        }
    })

    return children
}