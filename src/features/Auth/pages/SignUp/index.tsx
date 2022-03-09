import { Box, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import RegisterForm from "../../components/RegisterForm";
import { User } from "../../../../models";
import userApi from "../../../../api/userApi";

function SignUp() {
    const history = useNavigate();

    const handleSubmit = async (formData: User) => {
        try {
            const { email, password } = formData;
            await userApi.signup(email, password);
            history("/sign-in");
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    return (
        <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="h4">Login Form</Typography>
            <Typography variant="h6">or login with social accounts</Typography>

            <Container maxWidth="sm" sx={{ my: 6 }}>
                <RegisterForm onSubmit={handleSubmit} />

                <Link to="/sign-in">
                    <Typography fontWeight={500} sx={{ my: 4 }}>
                        Do you already have an account?
                    </Typography>
                </Link>
            </Container>
        </Box>
    );
}

export default SignUp;
