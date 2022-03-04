import React from "react";
import { Navigate, Route, RouteProps } from "react-router-dom";

export interface IPrivateRouteProps {}

function PrivateRoute(props: RouteProps) {
    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    console.log("loggin");

    if (!isLoggedIn) return <Navigate to="/sign-in" />;

    return <Route {...props} />;
}

export default PrivateRoute;
