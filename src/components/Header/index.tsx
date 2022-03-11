import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthDefaultData } from "../../contexts/AuthContext";
import { useAppDispatch } from "../../app/hooks";
import { authActions } from "../../features/Auth/authSlice";

const useStyles = makeStyles(() => ({
    link: {
        "&.active > button": {
            color: "black",
        },
    },
}));

function Header() {
    const dispatch = useAppDispatch();
    const value = useAuth();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleLogout = () => {
        if (value) {
            value?.setAuth(AuthDefaultData);
            navigate("/sign-in");
        }

        dispatch(authActions.logout());
    };

    const isLoggedIn = Boolean(localStorage.getItem("access_token"));
    return (
        <AppBar
            sx={{ boxShadow: 0 }}
            position="static"
            style={{ backgroundColor: "#fafafa", color: "#111" }}
        >
            <Container>
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <NavLink to="/">
                        <Typography variant="h6" fontWeight={700}>
                            H69
                        </Typography>
                    </NavLink>
                    <Box>
                        <NavLink to="/admin" className={classes.link}>
                            <Button variant="text">Admin</Button>
                        </NavLink>
                        <NavLink to="/photos" className={classes.link}>
                            <Button variant="text">Photos</Button>
                        </NavLink>
                        <NavLink to="/products" className={classes.link}>
                            <Button variant="text">Products</Button>
                        </NavLink>
                    </Box>
                    {value?.auth.email || isLoggedIn ? (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <AccountCircleIcon />
                            <Box sx={{ ml: 2 }}>
                                <Button
                                    variant="outlined"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Box>
                    ) : (
                        <NavLink to="/sign-in">
                            <Button variant="outlined">Sign In</Button>
                        </NavLink>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
