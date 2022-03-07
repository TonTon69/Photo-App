import { User } from "../models";
import { AuthActionType } from "./types";

const { LOGIN, LOGOUT, POPULATE, STOP_LOADING } = AuthActionType;

export interface AuthState {
    isAuthenticated: boolean;
    user: User;
    loading: boolean;
}

type AuthAction = {
    type: AuthActionType;
    payload: User;
};

export const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isAuthenticated: true,
                user: action.payload,
            };
        case LOGOUT:
            localStorage.removeItem("access_token");
            return {
                ...state,
                isAuthenticated: false,
                user: null,
            };
        case POPULATE:
            return {
                ...state,
                user: {
                    ...state.user,
                    ...action.payload,
                },
            };
        case STOP_LOADING:
            return {
                ...state,
                loading: false,
            };
        default:
            throw new Error(`Unknown action type: ${action.type}`);
    }
};
