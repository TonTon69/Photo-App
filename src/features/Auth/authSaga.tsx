import { PayloadAction } from "@reduxjs/toolkit";
import { call, delay, fork, put, take } from "redux-saga/effects";
import { authActions, LoginPayload } from "./authSlice";

function* handleLogin(payload: LoginPayload) {
    try {
        yield delay(1000);
        console.log("Login: ", payload);
        localStorage.setItem("access_token", "fake_token");
        // yield put(
        //     authActions.loginSuccess({
        //         id: 1,
        //         name: "tonton",
        //     })
        // );
    } catch (error) {
        yield put(authActions.loginFailed((error as Error).message));
    }
}

function* handleLogout() {
    yield delay(500);
    console.log("Logout");
    localStorage.removeItem("access_token");

    // redirect to login page
}

function* watchLoginFlow() {
    while (true) {
        const isLoggedIn = Boolean(localStorage.getItem("access_token"));

        if (!isLoggedIn) {
            const action: PayloadAction<LoginPayload> = yield take(
                authActions.login
            );
            yield fork(handleLogin, action.payload);
        }

        yield take(authActions.logout.type);
        yield call(handleLogout);
    }
}

export default function* authSaga() {
    yield fork(watchLoginFlow);
}
