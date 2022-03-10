import { Box, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../../../hooks";
import { User } from "../../../../models";
import userApi from "../../../../api/userApi";

function SignIn() {
    const history = useNavigate();
    const value = useAuth();

    const handleSubmit = async (formData: User) => {
        try {
            const response = await userApi.signin(formData);
            response?.data.map((user: User) => {
                const { roles } = user;
                value?.setAuth({ ...formData, roles });
                return roles;
            });

            history("/", { replace: true });
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    return (
        <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="h4">Login Form</Typography>
            <Typography variant="h6">or login with social accounts</Typography>

            <Container maxWidth="sm" sx={{ my: 6 }}>
                <LoginForm onSubmit={handleSubmit} />

                <Link to="/sign-up">
                    <Typography fontWeight={500} sx={{ my: 4 }}>
                        Do not have an account?
                    </Typography>
                </Link>
            </Container>
        </Box>
    );
}

export default SignIn;
