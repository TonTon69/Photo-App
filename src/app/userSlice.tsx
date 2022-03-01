import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import userApi from "../api/userApi";

export const getMe = createAsyncThunk(
    "user/getMe",
    async (params, thunkAPI) => {
        const currentUser = await userApi.getMe();
        return currentUser;
    }
);

const userSlice = createSlice({
    name: "user",
    initialState: {
        current: {},
    },
    reducers: {},
    extraReducers: {
        [getMe.fulfilled.type]: (state, action) => {
            state.current = action.payload;
        },
    },
});

const { reducer } = userSlice;
export default reducer;
