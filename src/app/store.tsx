import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../features/Photo/photoSlice";
import authSlice from "../features/Auth/authSlice";
import userSlice from "./userSlice";

const rootReducer = {
    photo: photoSlice,
    user: userSlice,
    auth: authSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
