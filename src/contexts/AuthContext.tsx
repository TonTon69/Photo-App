import React, { createContext, useState } from "react";
import { ROLES } from "../constants/roles";
import { User } from "../models";

interface AuthProviderProps {
    children: React.ReactNode;
}

interface IAuthContext {
    auth: User;
    setAuth: (state: User) => void;
}

export const AuthDefaultData = {
    email: "",
    password: "",
    roles: [ROLES.User],
};

export const AuthContext = createContext<IAuthContext | null>(null);

export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [auth, setAuth] = useState<User>(AuthDefaultData);

    const value = {
        auth,
        setAuth,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export default AuthContext;
