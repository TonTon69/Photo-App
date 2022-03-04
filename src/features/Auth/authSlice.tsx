import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../models/User";

// export interface LoginPayload {
//     username: string;
//     password: string;
// }

// export interface AuthState {
//     isLoggedIn: boolean;
//     logging?: boolean;
//     currentUser?: User;
// }

const initialState = {
    username: "",
    email: "",
    isFetching: false,
    isSuccess: false,
    isError: false,
    errorMessage: "",
};

export const login = createAsyncThunk(
    "users/login",
    async ({ email, password }: User, thunkAPI) => {
        try {
            const response = await fetch("http://localhost:8080/auth", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email,
                    password,
                }),
            });
            let data = await response.json();
            console.log("data", data);
            if (response.status === 200) {
                localStorage.setItem("token", data.token);
                return data;
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            console.log("Error", error);
            return thunkAPI.rejectWithValue(error);
        }
    }
);

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // login(state, action: PayloadAction<LoginPayload>) {
        //     state.logging = true;
        // },
        // loginSuccess(state, action: PayloadAction<User>) {
        //     state.isLoggedIn = true;
        //     state.logging = false;
        //     state.currentUser = action.payload;
        // },
        // loginFailed(state, action: PayloadAction<string>) {
        //     state.logging = false;
        // },
        // logout(state) {
        //     state.isLoggedIn = false;
        //     state.currentUser = undefined;
        // },
    },
    extraReducers: (builder) => {
        builder.addCase(login.fulfilled, (state, { payload }) => {
            state.email = payload.email;
            state.username = payload.name;
            state.isFetching = false;
            state.isSuccess = true;
            return state;
        });

        builder.addCase(login.pending, (state) => {
            state.isFetching = true;
        });

        builder.addCase(login.rejected, (state, { payload }) => {
            console.log("payload", payload);
            state.isFetching = false;
            state.isError = true;
            // state.errorMessage = payload.message;
        });
    },
});

const { reducer, actions } = authSlice;
// export const { login } = actions;

// Selectors
// export const selectIsLoggedIn = (state: any) => state.auth.isLoggedIn;
// export const selectIsLogging = (state: any) => state.auth.logging;
export const authSelector = (state: any) => state.auth;

export default reducer;
