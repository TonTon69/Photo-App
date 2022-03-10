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

const useStyles = makeStyles(() => ({
    link: {
        "&.active > button": {
            color: "black",
        },
    },
}));

function Header() {
    const value = useAuth();
    const navigate = useNavigate();
    const classes = useStyles();

    const handleLogout = () => {
        value?.setAuth(AuthDefaultData);
        navigate("/sign-in");
    };

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
                    {value?.auth.email ? (
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
