import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import NotFound from "./components/NotFound";
import Header from "./components/Header";
import "./App.css";

// Lazy load - Code splitting
const Photo = React.lazy(() => import("./features/Photo"));

const theme = createTheme({
    typography: {
        allVariants: {
            fontFamily: `"Poppins", "sans-serif"`,
            textTransform: "none",
            fontSize: 14,
        },
    },
});

function App() {
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
                            <Route path="*" element={<NotFound />} />
                        </Routes>
                    </BrowserRouter>
                </Suspense>
            </div>
        </ThemeProvider>
    );
}

export default App;
