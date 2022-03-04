import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SignIn from "./features/Auth/pages/SignIn";

import "./App.css";
import { useAppDispatch } from "./app/hooks";
import { getMe } from "./app/userSlice";
import { unwrapResult } from "@reduxjs/toolkit";

import Product from "./features/Product";
import PrivateRoute from "./components/PrivateRoute";
// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

// Configure Firebase.
const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: `"Poppins", "sans-serif"`,
            textTransform: "none",
        },
    },
});

function App() {
    const dispatch = useAppDispatch();
    const [user, setUser] = useState<any>(null);

    console.log("user: ", user);

    useEffect(() => {
        const unregisterAuthObserver = firebase
            .auth()
            .onAuthStateChanged(async (user) => {
                if (!user) {
                    console.log("User is not logged in");
                    return;
                }

                // get me when signed in
                try {
                    const action = getMe();
                    const actionResult = await dispatch(action);
                    const currentUser = unwrapResult(actionResult);
                    console.log(currentUser);

                    if (currentUser) setUser(currentUser);
                } catch (error) {
                    console.log("Failed to Login: ", error);
                }
            });

        return () => unregisterAuthObserver();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Suspense fallback={<div>Loading ...</div>}>
                    <BrowserRouter>
                        <Header />

                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/photos" />}
                            />
                            <Route path="/photos/*" element={<Photo />} />
                            <Route path="/sign-in" element={<SignIn />} />
                            <Route
                                path="/products/*"
                                element={
                                    <PrivateRoute>
                                        <Product />
                                    </PrivateRoute>
                                }
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </div>
        </ThemeProvider>
    );
}

export default App;
