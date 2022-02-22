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
                    <Typography variant="h6" component="div">
                        H69
                    </Typography>
                    <Button color="inherit">
                        <Link to="/">Redux Project</Link>
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;
