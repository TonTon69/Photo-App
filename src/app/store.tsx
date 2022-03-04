import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import photoSlice from "../features/Photo/photoSlice";
import authSlice from "../features/Auth/authSlice";
import userSlice from "./userSlice";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = {
    photo: photoSlice,
    user: userSlice,
    auth: authSlice,
};

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
    ReturnType,
    RootState,
    unknown,
    Action<string>
>;
