import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { AuthDefaultData } from "../../contexts/AuthContext";

function Header() {
    const value = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        value?.setAuth(AuthDefaultData);
        navigate("/sign-in");
    };

    return (
        <AppBar
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
                    <Link to="/">
                        <Typography variant="h6" fontWeight={700}>
                            H69
                        </Typography>
                    </Link>
                    <Box>
                        <Link to="/photos">
                            <Button variant="text">Photos</Button>
                        </Link>
                        <Link to="/products">
                            <Button variant="text">Products</Button>
                        </Link>
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
                        <Link to="/sign-in">
                            <Button variant="outlined">Sign In</Button>
                        </Link>
                    )}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
