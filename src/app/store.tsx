import { configureStore } from "@reduxjs/toolkit";
import photoSlice from "../features/Photo/photoSlice";

const rootReducer = {
    photo: photoSlice,
};

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
