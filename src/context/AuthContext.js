"use client"

import {createContext, useContext, useState} from "react";
import { api } from "@/utils/api";
import { NextResponse } from "next/server";

const AuthContext = createContext();

export default function AuthProvider({children}){
    const [user, setUser] = useState(null)
    const [IsAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    
    const register = async (credentials) => {
        try {
            setIsLoading(true);
            const res = await api.post("/auth/register/", credentials, {
                credentials: 'include'
            });
            if (res.status === 201){
                return res.data
            }
        } catch (error) {
            // const status = error.response ? error.response.status : 500;
            const errorMessage = error.response
              ? error.response.data
              : "Error interno del servidor";
            // console.log(status, errorMessage)
            // return NextResponse.json({ errors: errorMessage || null }, { status });
            throw errorMessage
        } finally {
            setIsLoading(false);
        }
    } 
    const login = async (credentials) => {

    }

    return (
        <AuthContext.Provider value={{register}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () =>{
    return useContext(AuthContext)
}