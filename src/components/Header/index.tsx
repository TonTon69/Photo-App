import {
    AppBar,
    Box,
    Button,
    Container,
    Toolbar,
    Typography,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";

function Header() {
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
                    {/* {isAuthenticated ? (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Typography fontWeight={600}>{username}</Typography>
                            <Box sx={{ ml: 2 }}>
                                <Button
                                    variant="outlined"
                                    // onClick={toggleAuth.bind(this, "")}
                                >
                                    Logout
                                </Button>
                            </Box>
                        </Box>
                    ) : ( */}
                    <Link to="/sign-in">
                        <Button variant="outlined">Sign In</Button>
                    </Link>
                    {/* )} */}
                </Toolbar>
            </Container>
        </AppBar>
    );
}

export default Header;
