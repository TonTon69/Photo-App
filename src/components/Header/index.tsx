import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Header() {
    return (
        <Box>
            <AppBar
                position="static"
                style={{ backgroundColor: "#fafafa", color: "#111" }}
            >
                <Toolbar
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Typography variant="h6">
                        <Link to="/">H69</Link>
                    </Typography>
                    <Box>
                        <Button color="inherit">
                            <Link to="/photos">Photos</Link>
                        </Button>
                        <Button color="inherit">
                            <Link to="/products">Products</Link>
                        </Button>
                    </Box>
                    <Button color="inherit">
                        <Link to="/sign-in">Sign In</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
