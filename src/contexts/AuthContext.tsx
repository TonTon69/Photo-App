import React, { createContext, useState } from "react";
import { User } from "../models";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface IAuthContext {
    auth: User;
    setAuth: (state: User) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState({
        email: "",
        password: "",
    });

    const value = {
        auth,
        setAuth,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
