import { ChangeEvent, useContext, useState } from "react";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignIn() {
    const [username, setUsername] = useState("");
    const history = useNavigate();

    const handleUsernameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleLoginClick = () => {
        // toggleAuth(username);
        // setUsername("");
        history("/");
    };

    return (
        <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="h4">Login Form</Typography>
            <Typography variant="h6">or login with social accounts</Typography>

            <Container maxWidth="sm" sx={{ my: 6 }}>
                <TextField
                    autoComplete="off"
                    fullWidth
                    value={username}
                    label="Username"
                    onChange={handleUsernameChange}
                />
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleLoginClick}
                    disabled={username === ""}
                    style={{
                        marginTop: "20px",
                    }}
                >
                    Login
                </Button>
            </Container>
        </Box>
    );
}

export default SignIn;
