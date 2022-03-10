import { Box, Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Unauthorized() {
    const navigate = useNavigate();
    const goBack = () => navigate(-1);

    return (
        <Container sx={{ textAlign: "center", my: 6 }}>
            <Typography variant="h4">Unauthorized</Typography>
            <br />
            <Typography>
                You do not have access to the requested page.
            </Typography>
            <Box>
                <Button onClick={goBack}>Go Back</Button>
            </Box>
        </Container>
    );
}

export default Unauthorized;
