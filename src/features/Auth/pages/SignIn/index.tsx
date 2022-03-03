import React from "react";
import { Box, Container, Typography } from "@mui/material";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { StyledFirebaseAuth } from "react-firebaseui";
import { useAppDispatch } from "../../../../app/hooks";
import { login } from "../../authSlice";
import AuthForm from "../../components/AuthForm";

// Configure FirebaseUI.
const uiConfig = {
    signInFlow: "redirect",
    signInSuccessUrl: "/photos",
    signInOptions: [firebase.auth.GoogleAuthProvider.PROVIDER_ID],
};

function SignIn() {
    const dispatch = useAppDispatch();

    const handleLoginClick = () => {
        console.log("Hello");
    };

    const initialValues = {};

    return (
        <Box sx={{ textAlign: "center", my: 4 }}>
            <Typography variant="h4">Login Form</Typography>
            <Typography variant="h6">or login with social accounts</Typography>
            <StyledFirebaseAuth
                uiConfig={uiConfig}
                firebaseAuth={firebase.auth()}
            />

            <Container maxWidth="sm" sx={{ my: 6 }}>
                <AuthForm
                    initialValues={initialValues}
                    onSubmit={handleLoginClick}
                />
            </Container>
        </Box>
    );
}

export default SignIn;
