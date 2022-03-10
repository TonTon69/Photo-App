import React from "react";
import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Sidebar from "../Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../../features/Dashboard";
import Students from "../../features/Students";

type AdminLayoutProps = {};

const useStyles = makeStyles((theme?: any) => ({
    root: {
        display: "grid",
        gridTemplateRows: "auto",
        gridTemplateColumns: "240px 1fr",
        gridTemplateAreas: `"sidebar main"`,
        minHeight: "100vh",
    },

    sidebar: {
        gridArea: "sidebar",
        borderRight: `1px solid ${theme.palette.divider}`,
    },

    main: {
        gridArea: "main",
        padding: theme.spacing(2, 3),
    },
}));

export function AdminLayout(props: AdminLayoutProps) {
    const classes = useStyles();

    return (
        <Box className={classes.root}>
            <Box className={classes.sidebar}>
                <Sidebar />
            </Box>
            <Box className={classes.main}>
                <Routes>
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="students" element={<Students />} />
                </Routes>
            </Box>
        </Box>
    );
}
