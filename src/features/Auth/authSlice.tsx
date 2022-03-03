import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";

export interface LoginPayload {
    username: string;
    password: string;
}

export interface AuthState {
    isLoggedIn: boolean;
    logging?: boolean;
    currentUser?: User;
}

const initialState: AuthState = {
    isLoggedIn: false,
    logging: false,
    currentUser: undefined,
    // username: "",
    // email: "",
    // isFetching: false,
    // isSuccess: false,
    // isError: false,
    // errorMessage: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login(state, action: PayloadAction<LoginPayload>) {
            state.logging = true;
        },
        loginSuccess(state, action: PayloadAction<User>) {
            state.isLoggedIn = true;
            state.logging = false;
            state.currentUser = action.payload;
        },
        loginFailed(state, action: PayloadAction<string>) {
            state.logging = false;
        },

        logout(state) {
            state.isLoggedIn = false;
            state.currentUser = undefined;
        },
    },
});

const { reducer, actions } = authSlice;
export const { login } = actions;

// Selectors
export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
export const selectIsLogging = (state: any) => state.auth.logging;
export const authSelector = (state: any) => state.auth;

export default reducer;
