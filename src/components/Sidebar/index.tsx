import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Dashboard, PeopleAlt } from "@mui/icons-material";
import { NavLink } from "react-router-dom";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme?: any) => ({
    link: {
        "&.active > div": {
            backgroundColor: theme.palette.action.selected,
        },
    },
}));

export default function Sidebar() {
    const classes = useStyles();

    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
            <nav aria-label="main mailbox folders">
                <List>
                    <NavLink to="/admin/dashboard" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <Dashboard />
                            </ListItemIcon>
                            <ListItemText primary="Dashboard" />
                        </ListItem>
                    </NavLink>
                    <NavLink to="/admin/students" className={classes.link}>
                        <ListItem button>
                            <ListItemIcon>
                                <PeopleAlt />
                            </ListItemIcon>
                            <ListItemText primary="Students" />
                        </ListItem>
                    </NavLink>
                </List>
            </nav>
        </Box>
    );
}
