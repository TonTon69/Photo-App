import React, { Suspense } from "react";
import { Routes, Route, Navigate, BrowserRouter } from "react-router-dom";
import { CircularProgress } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import Header from "./components/Header";
import NotFound from "./components/NotFound";
import SignIn from "./features/Auth/pages/SignIn";
import SignUp from "./features/Auth/pages/SignUp";

import Product from "./features/Product";
import PrivateRoute from "./components/PrivateRoute";
import { ROLES } from "./constants/roles";
import Unauthorized from "./components/Unauthorized";
import { AdminLayout } from "./components/Layout";

import { history } from "./utils";
import "./App.css";
import CustomRouter from "./routes/CustomRouter";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: `"Poppins", "sans-serif"`,
            textTransform: "none",
        },
    },
});

function App() {
    return (
        <ThemeProvider theme={theme}>
            <div className="App">
                <Suspense fallback={<CircularProgress />}>
                    <CustomRouter history={history}>
                        <Header />

                        <Routes>
                            <Route
                                path="/"
                                element={<Navigate to="/photos" />}
                            />
                            <Route path="photos/*" element={<Photo />} />
                            <Route path="sign-in" element={<SignIn />} />
                            <Route path="sign-up" element={<SignUp />} />

                            {/* <Route
                                element={
                                    <PrivateRoute
                                        allowedRoles={[ROLES.Admin]}
                                    />
                                }
                            >
                            </Route> */}
                            <Route path="admin/*" element={<AdminLayout />} />
                            <Route
                                element={
                                    <PrivateRoute
                                        allowedRoles={[ROLES.Admin]}
                                    />
                                }
                            >
                                <Route
                                    path="products/*"
                                    element={<Product />}
                                />
                            </Route>

                            <Route
                                path="unauthorized"
                                element={<Unauthorized />}
                            />
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </CustomRouter>
                </Suspense>
            </div>
        </ThemeProvider>
    );
}

export default App;
