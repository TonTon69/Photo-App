import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../hooks";

export interface PrivateRouteProps {
    allowedRoles: number[];
}

function PrivateRoute({ allowedRoles }: PrivateRouteProps) {
    const value = useAuth();

    return value?.auth?.roles?.find((role) => allowedRoles?.includes(role)) ? (
        <Outlet />
    ) : value?.auth?.email ? (
        <Navigate to="/unauthorized" replace />
    ) : (
        <Navigate to="/sign-in" replace />
    );
}

export default PrivateRoute;
