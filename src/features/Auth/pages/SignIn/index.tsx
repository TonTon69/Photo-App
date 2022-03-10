import { Box, Button, Container, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import LoginForm from "../../components/LoginForm";
import { useAuth } from "../../../../hooks";
import { User } from "../../../../models";
import userApi from "../../../../api/userApi";
import { authActions } from "../../authSlice";
import { useAppDispatch } from "../../../../app/hooks";

function SignIn() {
    const history = useNavigate();
    const value = useAuth();
    const dispatch = useAppDispatch();

    const handleSubmit = async (formData: User) => {
        try {
            const response = await userApi.signin(formData);
            response?.data.map((user: User) => {
                const { roles } = user;
                value?.setAuth({ ...formData, roles });
                return roles;
            });

            history("/admin/dashboard", { replace: true });
        } catch (error) {
            console.log("Error: " + error);
        }
    };

    const handleSubmitClick = () => {
        dispatch(
            authActions.login({
                email: "",
                password: "",
            })
        );
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

                <Button onClick={handleSubmitClick}>Fake login</Button>
            </Container>
        </Box>
    );
}

export default SignIn;
